import { useState, useRef, useEffect } from "react";
import PageHeader from "../components/layout/PageHeader";
import InfoPanel from "../components/ui/InfoPanel";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  studentContext,
  quickPromptCategories,
  suggestedPrompts,
  initialMessages,
  generateAIResponse,
} from "../data/aiAssistantData";

function AIAssistantPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedId, setCopiedId] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const chatEndRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  const filteredPrompts =
    selectedCategory === "all"
      ? suggestedPrompts
      : suggestedPrompts.filter((p) => p.category === selectedCategory);

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isGenerating) return;

    const userMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      text: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsGenerating(true);

    try {
      const responseText = await generateAIResponse(query);
      const aiMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        text: responseText,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage = {
        id: `err-${Date.now()}`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        text: "⚠️ I encountered an error processing your query. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopy = (messageId, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(messageId);
    setToastMessage("Copied response to clipboard!");
    setTimeout(() => {
      setCopiedId(null);
      setToastMessage("");
    }, 2500);
  };

  const handleClearChat = () => {
    setMessages([]);
    setToastMessage("Chat cleared. Ready for a new conversation.");
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleResetToDefault = () => {
    setMessages(initialMessages);
    setToastMessage("Conversation restarted.");
    setTimeout(() => setToastMessage(""), 3000);
  };

  // Basic formatting helper for headers, code blocks, lists, and bold text
  // Inline parser for bold (**text**), italics (*text*), and inline code (`code`)
  const parseInlineMarkdown = (text) => {
    const parts = text.split(/(\*\*.*?\*\*|`.*?`|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
        return (
          <code key={i} className="ai-inline-code">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
        return <em key={i}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  // Structured message block parser
  const renderFormattedMessage = (content) => {
    const lines = content.split("\n");
    let inCodeBlock = false;
    let codeBuffer = [];

    const elements = [];

    lines.forEach((line, index) => {
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${index}`} className="ai-code-block">
              <code>{codeBuffer.join("\n")}</code>
            </pre>
          );
          codeBuffer = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      const trimmed = line.trim();

      if (line.startsWith("### ")) {
        elements.push(
          <h4 key={`h-${index}`} className="ai-msg-heading">
            {parseInlineMarkdown(line.replace("### ", ""))}
          </h4>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h3 key={`h2-${index}`} className="ai-msg-heading">
            {parseInlineMarkdown(line.replace("## ", ""))}
          </h3>
        );
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const isIndented = line.startsWith("  ") || line.startsWith("\t");
        elements.push(
          <li
            key={`li-${index}`}
            className={`ai-msg-bullet ${isIndented ? "ai-bullet-indent" : ""}`}
          >
            {parseInlineMarkdown(trimmed.slice(2))}
          </li>
        );
      } else if (/^\d+\.\s+/.test(trimmed)) {
        const match = trimmed.match(/^(\d+)\.\s+(.*)/);
        elements.push(
          <li key={`num-${index}`} className="ai-msg-numbered">
            <span className="num-prefix">{match[1]}.</span>
            {parseInlineMarkdown(match[2])}
          </li>
        );
      } else if (trimmed === "") {
        elements.push(<div key={`br-${index}`} className="ai-msg-spacer"></div>);
      } else {
        elements.push(
          <p key={`p-${index}`} className="ai-msg-paragraph">
            {parseInlineMarkdown(line)}
          </p>
        );
      }
    });

    if (inCodeBlock && codeBuffer.length > 0) {
      elements.push(
        <pre key="code-remaining" className="ai-code-block">
          <code>{codeBuffer.join("\n")}</code>
        </pre>
      );
    }

    return elements;
  };

  return (
    <main className="dashboard">
      <PageHeader
        icon="🤖"
        title="AI Academic Assistant"
        subtitle="Your context-aware copilot for academic inquiries, exam preparation, attendance, and coding."
      />

      {toastMessage && (
        <div className="ai-toast-alert">
          <span>🔔</span> {toastMessage}
        </div>
      )}

      {/* Student ERP Context Badge Bar */}
      <div className="ai-context-banner">
        <div className="context-banner-left">
          <span className="context-pill">
            🎓 {studentContext.name} ({studentContext.branch}, Sem {studentContext.semester})
          </span>
          <span className="context-pill">📊 CGPA: {studentContext.cgpa}</span>
          <span className="context-pill">📅 Attendance: {studentContext.attendance}</span>
          <span className="context-pill context-pill-warn">
            ⚠️ DAA: {studentContext.daaAttendance}
          </span>
        </div>
        <div className="context-banner-right">
          <button
            className="ai-reset-btn"
            onClick={messages.length === 0 ? handleResetToDefault : handleClearChat}
            title="Clear or restart conversation"
          >
            {messages.length === 0 ? "🔄 Reset Chat" : "🗑 Clear Chat"}
          </button>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="ai-chat-layout">
        {/* Chat Thread Container */}
        <div className="ai-chat-container">
          <div className="ai-messages-stream">
            {messages.length === 0 ? (
              <div className="ai-empty-state">
                <div className="empty-state-icon">🤖</div>
                <h3>How can I help you today, Tushar?</h3>
                <p>
                  Ask any question about your curriculum, check attendance safety, generate an
                  exam revision plan, or ask for coding help.
                </p>
                <div className="empty-state-quick-actions">
                  <button
                    className="empty-action-card"
                    onClick={() => handleSendMessage(suggestedPrompts[0].prompt)}
                  >
                    <span>📅</span> Check Upcoming Exams
                  </button>
                  <button
                    className="empty-action-card"
                    onClick={() => handleSendMessage(suggestedPrompts[1].prompt)}
                  >
                    <span>⚠️</span> Attendance Safety Analysis
                  </button>
                  <button
                    className="empty-action-card"
                    onClick={() => handleSendMessage(suggestedPrompts[3].prompt)}
                  >
                    <span>📚</span> Generate DBMS Study Plan
                  </button>
                </div>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`ai-message-row ${
                    msg.sender === "user" ? "user-row" : "ai-row"
                  }`}
                >
                  <div className="message-avatar">
                    {msg.sender === "user" ? "👤" : "🤖"}
                  </div>

                  <div className="message-bubble-wrapper">
                    <div className="message-meta-header">
                      <span className="message-author">
                        {msg.sender === "user" ? "You" : "ScholarSync Copilot"}
                      </span>
                      <span className="message-time">{msg.timestamp}</span>
                    </div>

                    <div
                      className={`message-bubble ${
                        msg.sender === "user" ? "bubble-user" : "bubble-ai"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <p>{msg.text}</p>
                      ) : (
                        renderFormattedMessage(msg.text)
                      )}
                    </div>

                    {msg.sender === "ai" && (
                      <div className="message-actions">
                        <button
                          className="copy-msg-btn"
                          onClick={() => handleCopy(msg.id, msg.text)}
                        >
                          {copiedId === msg.id ? "✓ Copied" : "📋 Copy Response"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            {/* Typing Indicator */}
            {isGenerating && (
              <div className="ai-message-row ai-row">
                <div className="message-avatar">🤖</div>
                <div className="message-bubble-wrapper">
                  <div className="message-bubble bubble-ai typing-bubble">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-text">ScholarSync AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="ai-input-wrapper">
            <input
              type="text"
              className="ai-chat-input"
              placeholder="Ask anything about exams, syllabus, attendance, or coding (Press Enter to send)..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isGenerating}
            />

            <PrimaryButton
              text={isGenerating ? "Thinking..." : "Send ➔"}
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isGenerating}
            />
          </div>
        </div>

        {/* Quick Prompts Panel */}
        <InfoPanel icon="💡" title="Suggested Quick Prompts">
          <div className="prompt-category-tabs">
            {quickPromptCategories.map((cat) => (
              <button
                key={cat.id}
                className={`prompt-cat-btn ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="prompts-grid">
            {filteredPrompts.map((item) => (
              <div
                key={item.id}
                className="prompt-card"
                onClick={() => handleSendMessage(item.prompt)}
              >
                <div className="prompt-card-icon">{item.icon}</div>
                <div className="prompt-card-content">
                  <h4>{item.title}</h4>
                  <p>{item.prompt}</p>
                </div>
                <span className="prompt-arrow">➔</span>
              </div>
            ))}
          </div>
        </InfoPanel>
      </div>
    </main>
  );
}

export default AIAssistantPage;
