import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import ProgressStatCard from "../components/ui/ProgressStatCard";
import InfoStatCard from "../components/ui/InfoStatCard";
import InfoPanel from "../components/ui/InfoPanel";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  assessmentStats,
  assessmentCategories,
  activeAssessments,
  assessmentHistory,
} from "../data/assessmentsData";

function AssessmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [alertMessage, setAlertMessage] = useState("");

  const filteredAssessments =
    selectedCategory === "all"
      ? activeAssessments
      : activeAssessments.filter(
          (test) => test.category === selectedCategory
        );

  const handleStartTest = (testTitle) => {
    setAlertMessage(`Assessment "${testTitle}" launched! Good luck.`);
    setTimeout(() => setAlertMessage(""), 4000);
  };

  return (
    <main className="dashboard">
      <PageHeader
        icon="🧠"
        title="Assessments"
        subtitle="Practice coding challenges, aptitude tests, and track your performance."
      />

      {alertMessage && (
        <div className="assessment-alert">
          <span>🔔</span> {alertMessage}
        </div>
      )}

      {/* Overview Metric Cards */}
      <div className="academic-overview">
        <ProgressStatCard
          title="Completion Rate"
          value={assessmentStats.completionRate}
          max={100}
          status="On Track"
        />

        <InfoStatCard
          icon="📝"
          title="Active Tests"
          value={assessmentStats.activeTests}
          status="Available to attempt"
        />

        <InfoStatCard
          icon="🔥"
          title="Practice Streak"
          value={`${assessmentStats.streakDays} Days`}
          status="Consistency Streak"
        />
      </div>

      {/* Assessment Categories and Active Tests */}
      <InfoPanel icon="🎯" title="Available Assessments">
        <div className="category-filters">
          {assessmentCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${
                selectedCategory === cat.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="assessment-list">
          {filteredAssessments.length > 0 ? (
            filteredAssessments.map((test) => (
              <div key={test.id} className="assessment-card">
                <div className="assessment-card-header">
                  <div>
                    <h3>{test.title}</h3>
                    <div className="assessment-meta">
                      <span>⏱ {test.duration}</span>
                      <span>❓ {test.questions} Questions</span>
                      <span>📅 Deadline: {test.deadline}</span>
                    </div>
                  </div>
                  <span
                    className={`difficulty-tag difficulty-${test.difficulty.toLowerCase()}`}
                  >
                    {test.difficulty}
                  </span>
                </div>

                <div className="assessment-card-footer">
                  <span className="status-indicator">
                    ● {test.status}
                  </span>
                  <PrimaryButton
                    text="Start Assessment"
                    onClick={() => handleStartTest(test.title)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="no-data-msg">
              No assessments found in this category.
            </p>
          )}
        </div>
      </InfoPanel>

      {/* Assessment History */}
      <InfoPanel icon="📜" title="Past Assessment History">
        <div className="assessment-table-container">
          <table className="assessment-table">
            <thead>
              <tr>
                <th>Test Title</th>
                <th>Category</th>
                <th>Completion Date</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {assessmentHistory.map((item) => (
                <tr key={item.id}>
                  <td>{item.subject}</td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td>{item.score}</td>
                  <td>{item.percentage}</td>
                  <td>
                    <span className="history-status-badge">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </InfoPanel>
    </main>
  );
}

export default AssessmentsPage;
