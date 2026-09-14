import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import ProgressStatCard from "../components/ui/ProgressStatCard";
import InfoStatCard from "../components/ui/InfoStatCard";
import InfoPanel from "../components/ui/InfoPanel";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  analyticsOverview,
  semesterGpaProgression,
  subjectBenchmarks,
  attendanceBreakdown,
  skillCompetencies,
} from "../data/analyticsData";

function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [toastMessage, setToastMessage] = useState("");

  const handleExportReport = () => {
    setToastMessage("Generating comprehensive Academic Analytics PDF report...");
    setTimeout(() => {
      setToastMessage("Report downloaded: ScholarSync_Analytics_Sem7_Tushar.pdf");
      setTimeout(() => setToastMessage(""), 4000);
    }, 1200);
  };

  return (
    <main className="dashboard">
      <PageHeader
        icon="📊"
        title="Performance Analytics"
        subtitle="Track your academic trends, attendance consistency, benchmark comparisons, and skill mastery."
      />

      {toastMessage && (
        <div className="analytics-alert">
          <span>📈</span> {toastMessage}
        </div>
      )}

      {/* Top Macro KPIs Row */}
      <div className="academic-overview">
        <ProgressStatCard
          title="Overall CGPA"
          value={analyticsOverview.cgpa}
          max={analyticsOverview.cgpaMax}
          status={analyticsOverview.cgpaChange}
        />

        <InfoStatCard
          icon="📅"
          title="Avg Attendance"
          value={analyticsOverview.avgAttendance}
          status={analyticsOverview.attendanceStatus}
        />

        <InfoStatCard
          icon="🧠"
          title="Assessment Avg"
          value={analyticsOverview.assessmentAverage}
          status={analyticsOverview.assessmentPercentile}
        />

        <InfoStatCard
          icon="💼"
          title="Placement Index"
          value={analyticsOverview.placementIndex}
          status={analyticsOverview.placementEligibility}
        />
      </div>

      {/* Tab Navigation Filter */}
      <div className="analytics-filter-bar">
        <button
          className={`filter-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Semester Progression & Benchmarks
        </button>
        <button
          className={`filter-btn ${activeTab === "attendance" ? "active" : ""}`}
          onClick={() => setActiveTab("attendance")}
        >
          Attendance Safety Margins
        </button>
        <button
          className={`filter-btn ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          Technical Skill Competency
        </button>
      </div>

      {/* Tab 1: Progression & Benchmarks */}
      {activeTab === "overview" && (
        <>
          {/* Semester-by-Semester GPA Progression Chart */}
          <InfoPanel icon="📈" title="Semester SGPA Progression">
            <div className="gpa-chart-section">
              <div className="gpa-chart-header">
                <div>
                  <span className="chart-legend-item">
                    <span className="legend-dot dot-cleared"></span> Completed Semester
                  </span>
                  <span className="chart-legend-item">
                    <span className="legend-dot dot-projected"></span> Target / Projected
                  </span>
                </div>
                <span className="class-rank-badge">
                  🏆 Class Rank: {analyticsOverview.classRank}
                </span>
              </div>

              <div className="gpa-bars-container">
                {semesterGpaProgression.map((item) => {
                  const barHeight = ((item.sgpa - 5) / 5) * 100; // Scaled between 5.0 and 10.0
                  const isProjected = item.status === "Projected";

                  return (
                    <div key={item.semester} className="gpa-bar-column">
                      <span className="gpa-value-label">{item.sgpa.toFixed(2)}</span>
                      <div className="gpa-bar-track">
                        <div
                          className={`gpa-bar-fill ${
                            isProjected ? "bar-projected" : "bar-cleared"
                          }`}
                          style={{ height: `${Math.max(barHeight, 15)}%` }}
                          title={`${item.semester}: ${item.sgpa} SGPA (${item.credits} Credits)`}
                        ></div>
                      </div>
                      <span className="gpa-semester-label">{item.semester}</span>
                      <span className="gpa-credits-label">{item.credits} Cr</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </InfoPanel>

          {/* Subject Benchmarking vs Class Average */}
          <InfoPanel icon="🎯" title="Current Semester Subject Benchmarking">
            <div className="assessment-table-container">
              <table className="assessment-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Subject</th>
                    <th>My Score</th>
                    <th>Class Average</th>
                    <th>Highest</th>
                    <th>Performance vs Average</th>
                    <th>Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectBenchmarks.map((sub) => {
                    const diff = sub.studentScore - sub.classAvg;
                    return (
                      <tr key={sub.code}>
                        <td>
                          <span className="slot-code">{sub.code}</span>
                        </td>
                        <td>
                          <strong>{sub.subject}</strong>
                        </td>
                        <td className="fee-amount-cell">{sub.studentScore}%</td>
                        <td>{sub.classAvg}%</td>
                        <td>{sub.sectionHighest}%</td>
                        <td>
                          <div className="benchmark-bar-wrapper">
                            <div className="benchmark-bar-track">
                              <div
                                className="benchmark-bar-avg"
                                style={{ width: `${sub.classAvg}%` }}
                                title={`Class Avg: ${sub.classAvg}%`}
                              ></div>
                              <div
                                className="benchmark-bar-student"
                                style={{ width: `${sub.studentScore}%` }}
                                title={`Your Score: ${sub.studentScore}%`}
                              ></div>
                            </div>
                            <span className="diff-tag diff-positive">
                              +{diff}% above avg
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="status-chip chip-offer">
                            {sub.percentile}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </InfoPanel>
        </>
      )}

      {/* Tab 2: Attendance Safety Margins */}
      {activeTab === "attendance" && (
        <InfoPanel icon="📅" title="Attendance Safety Margins & Threshold Compliance">
          <p className="panel-subtext">
            AKTU regulations mandate a minimum of 75% attendance for examination eligibility.
          </p>

          <div className="assessment-table-container">
            <table className="assessment-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Lectures Attended</th>
                  <th>Attendance %</th>
                  <th>Compliance Status</th>
                  <th>Actionable Safety Margin</th>
                </tr>
              </thead>
              <tbody>
                {attendanceBreakdown.map((att) => (
                  <tr key={att.subject}>
                    <td>
                      <strong>{att.subject}</strong>
                    </td>
                    <td>
                      {att.attended} / {att.total} Lectures
                    </td>
                    <td>
                      <span className="fee-amount-cell">{att.percentage}%</span>
                    </td>
                    <td>
                      <span
                        className={`attendance-status-badge status-${att.status.toLowerCase()}`}
                      >
                        ● {att.status === "Safe" ? "Compliant (≥ 75%)" : "At Risk (< 75%)"}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`advice-pill ${
                          att.status === "Safe" ? "advice-safe" : "advice-warning"
                        }`}
                      >
                        {att.advice}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoPanel>
      )}

      {/* Tab 3: Technical Skills Competency */}
      {activeTab === "skills" && (
        <InfoPanel icon="⚡" title="Technical Skill Competency Profile">
          <div className="skills-analytics-grid">
            {skillCompetencies.map((skill) => (
              <div key={skill.skill} className="skill-meter-card">
                <div className="skill-meter-header">
                  <div>
                    <h4>{skill.skill}</h4>
                    <span className="skill-level-tag">{skill.level}</span>
                  </div>
                  <span className="skill-percentage">{skill.proficiency}%</span>
                </div>

                <div className="skill-meter-track">
                  <div
                    className="skill-meter-fill"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </InfoPanel>
      )}

      {/* Footer Actions */}
      <div className="analytics-footer">
        <PrimaryButton
          text="📥 Export Full Analytics Report"
          onClick={handleExportReport}
        />
      </div>
    </main>
  );
}

export default AnalyticsPage;
