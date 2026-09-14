export const studentContext = {
  name: "Tushar Shukla",
  semester: 7,
  branch: "B.Tech CSE - Data Science",
  university: "AKTU University",
  cgpa: 7.10,
  attendance: "82%",
  daaAttendance: "74% (At Risk - requires 2 more classes)",
  feeDue: "₹15,000",
  feeDueDate: "31 Jul 2026",
  nextExam: "Machine Learning on 12 Jul 2026 (10:00 AM - 1:00 PM)",
  placementStatus:
    "Eligible for TCS Digital (7.5 LPA), Infosys (9.5 LPA), Accenture (6.5 LPA); Ineligible for AWS (requires 7.5 CGPA)",
};

export const quickPromptCategories = [
  { id: "all", name: "🌟 All Prompts" },
  { id: "erp", name: "🎓 ERP & Academics" },
  { id: "study", name: "🗓 Study Planning" },
  { id: "coding", name: "💻 Coding & Concepts" },
  { id: "placement", name: "💼 Placements" },
];

export const suggestedPrompts = [
  {
    id: "p1",
    category: "erp",
    title: "Upcoming Exams",
    prompt: "What are my upcoming semester exams and timings?",
    icon: "📅",
  },
  {
    id: "p2",
    category: "erp",
    title: "Attendance Safety",
    prompt: "Check my attendance safety margin for DAA and overall compliance.",
    icon: "⚠️",
  },
  {
    id: "p3",
    category: "erp",
    title: "Pending Fees",
    prompt: "What is my outstanding fee balance and payment deadline?",
    icon: "💰",
  },
  {
    id: "p4",
    category: "study",
    title: "DBMS Study Plan",
    prompt: "Create a 3-day exam revision plan for Database Management Systems.",
    icon: "📚",
  },
  {
    id: "p5",
    category: "coding",
    title: "Dijkstra's Algorithm",
    prompt: "Explain Dijkstra's shortest path algorithm with a Python code example.",
    icon: "⚡",
  },
  {
    id: "p6",
    category: "placement",
    title: "Placement Eligibility",
    prompt: "Am I eligible for the TCS Digital and AWS campus drives?",
    icon: "🎯",
  },
];

export const initialMessages = [
  {
    id: "msg-init",
    sender: "ai",
    timestamp: "Just now",
    text: `Hello Tushar! 👋 I am your **ScholarSync Academic Assistant**.

I am connected to your student profile (**Semester 7, B.Tech CSE - Data Science, AKTU**). You can ask me about:
- 📅 **Upcoming Exams & Timetable Schedules**
- ⚠️ **Attendance Compliance & Safety Margins**
- 💰 **Outstanding Fees & Payment Deadlines**
- 💼 **Campus Placement Eligibility & Criteria**
- 📚 **Custom Study Plans & Concept Explanations**

Click on any quick prompt below or type your question!`,
  },
];

/**
 * Isolated Response Engine
 * Simulates intelligent ERP-aware responses.
 * Later, this function can be easily swapped for a real fetch('/api/v1/chat') call.
 */
export async function generateAIResponse(prompt) {
  // Simulate network latency (600ms)
  await new Promise((resolve) => setTimeout(resolve, 650));

  const lower = prompt.toLowerCase();

  // 1. Upcoming Exams
  if (lower.includes("exam") || lower.includes("upcoming exam") || lower.includes("datesheet")) {
    return `### 📅 Upcoming Semester 7 Exam Schedule

Here are your officially scheduled upcoming examinations from your **Academics** records:

1. **Machine Learning (CS701)**
   - **Date:** 12 Jul 2026
   - **Time:** 10:00 AM – 1:00 PM
   - **Venue:** Examination Hall 2

2. **Database Management System (CS702)**
   - **Date:** 15 Jul 2026
   - **Time:** 2:00 PM – 5:00 PM
   - **Venue:** Examination Hall 1

3. **Design & Analysis of Algorithms (CS703)**
   - **Date:** 18 Jul 2026
   - **Time:** 10:00 AM – 1:00 PM
   - **Venue:** Examination Hall 3

💡 **Tip:** Your next exam is **Machine Learning** in 2 days. Would you like a rapid 24-hour revision checklist?`;
  }

  // 2. Attendance & Safety Margins
  if (lower.includes("attendance") || lower.includes("margin") || lower.includes("shortage")) {
    return `### ⚠️ Attendance Safety Analysis (AKTU 75% Rule)

Here is your current subject-wise attendance health breakdown:

- **Overall Attendance:** **82%** (Compliant ✅)
- **Machine Learning:** 34 / 40 (85%) — *Can miss 2 classes safely*
- **DBMS:** 36 / 42 (86%) — *Can miss 2 classes safely*
- **Big Data Analytics:** 32 / 38 (84%) — *Can miss 1 class safely*
- **Computer Networks:** 30 / 37 (81%) — *Can miss 1 class safely*

🚨 **Action Required for DAA:**
- **Design & Analysis of Algorithms:** **28 / 38 (74%)** — **At Risk**
- **Safety Margin:** You are currently **1% below the 75% eligibility cutoff**. You **must attend the next 2 DAA lectures** (scheduled Wednesday & Friday) to regain 75% safe standing!`;
  }

  // 3. Fees and Payments
  if (lower.includes("fee") || lower.includes("dues") || lower.includes("payment") || lower.includes("balance")) {
    return `### 💰 Student Fee Status Summary

- **Total Semester 7 Fees:** ₹1,25,000
- **Total Paid to Date:** ₹1,10,000 (88% Cleared)
- **Outstanding Dues:** **₹15,000**
- **Payment Deadline:** **31 July 2026**
- **Pending Head:** *Advanced Computing Lab & University ERP Fee*

💳 **Payment Options:**
You can pay directly through the **Fees** module via UPI, Net Banking, or Card. After payment, instant receipts are generated for download.`;
  }

  // 4. Placements
  if (lower.includes("placement") || lower.includes("tcs") || lower.includes("amazon") || lower.includes("eligible")) {
    return `### 💼 Campus Placement Eligibility (CGPA: 7.10)

Based on your verified records in ScholarSync:

✅ **Eligible Drives:**
- **TCS Digital (7.5 LPA):** Minimum cutoff is 6.5 CGPA. **You are Eligible!** Application deadline: 22 Jul 2026.
- **Infosys Specialist Programmer (9.5 LPA):** Minimum cutoff is 7.0 CGPA. **You are Eligible!** Application deadline: 25 Jul 2026.
- **Accenture (6.5 LPA):** Minimum cutoff is 6.5 CGPA. **You are Eligible!**

❌ **Ineligible Drive:**
- **Amazon Web Services (14.0 LPA):** Requires a minimum 7.5 CGPA with zero active backlogs. Your current CGPA is **7.10**, so this drive is locked.

📌 **Current Active Applications:**
- **Cognizant GenC Next:** Technical Interview scheduled.
- **Wipro Turbo:** Offer Extended.`;
  }

  // 5. Study Plan
  if (lower.includes("study plan") || lower.includes("revision") || lower.includes("prepare") || lower.includes("schedule")) {
    return `### 🗓 Recommended 3-Day Intensive DBMS Revision Plan

Here is an optimized study plan covering the high-weightage topics for your upcoming **DBMS (CS702)** exam:

- **Day 1: Relational Model & SQL (4 Hours)**
  - Relational Algebra, Tuple Relational Calculus
  - Complex SQL Queries (Joins, Subqueries, Group By & Having)
  - Practice 10 SQL problems in ScholarSync Assessments

- **Day 2: Normalization & Indexing (5 Hours)**
  - Functional Dependencies, Candidate Key algorithms
  - 1NF, 2NF, 3NF, and BCNF decomposition checks
  - B-Trees, B+ Trees, and Hash Indexing structures

- **Day 3: Transaction Processing & Concurrency (4 Hours)**
  - ACID properties, Serializability (Conflict vs View)
  - 2-Phase Locking (2PL), Timestamp Ordering
  - Solve last 3 years AKTU question papers

🎯 *Need notes or quiz questions for any specific unit? Just ask!*`;
  }

  // 6. Coding & Dijkstra
  if (lower.includes("dijkstra") || lower.includes("algorithm") || lower.includes("python") || lower.includes("code")) {
    return `### ⚡ Dijkstra's Shortest Path Algorithm (Python)

Dijkstra's Algorithm finds the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights using a **Min-Heap (Priority Queue)** with time complexity **O((V + E) log V)**.

\`\`\`python
import heapq

def dijkstra(graph, start):
    # graph: dict of {node: [(neighbor, weight)]}
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]  # (distance, node)

    while pq:
        curr_dist, curr_node = heapq.heappop(pq)

        if curr_dist > distances[curr_node]:
            continue

        for neighbor, weight in graph[curr_node]:
            distance = curr_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return distances

# Example Graph
graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('D', 5)],
    'C': [('B', 1), ('D', 8), ('E', 10)],
    'D': [('E', 2)],
    'E': []
}

print(dijkstra(graph, 'A'))
# Output: {'A': 0, 'B': 3, 'C': 2, 'D': 8, 'E': 10}
\`\`\`

💡 **Key Takeaway:** Dijkstra fails on negative edge weights (use **Bellman-Ford** instead).`;
  }

  // 7. General Fallback
  return `### 🤖 ScholarSync Copilot Response

I have analyzed your request regarding **"${prompt}"**.

As your academic copilot, here are quick insights relevant to your Semester 7 curriculum:
1. **Academic Standing:** You have a cumulative **7.10 CGPA** with zero active backlogs across 135 completed credits.
2. **Key Priority:** Your upcoming **Machine Learning** exam on **12 Jul 2026** and **DAA attendance recovery** (need 2 consecutive attendances).
3. **Assistance Available:**
   - Ask me to draft detailed lecture summaries.
   - Request mock quiz questions on Machine Learning or Big Data Analytics.
   - Ask for placement coding tips or company interview experiences.

Feel free to pick one of the suggested prompts or ask a more specific question!`;
}
