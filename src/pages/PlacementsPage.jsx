import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import ProgressStatCard from "../components/ui/ProgressStatCard";
import InfoStatCard from "../components/ui/InfoStatCard";
import InfoPanel from "../components/ui/InfoPanel";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  placementStats,
  campusDrives,
  studentApplications,
} from "../data/placementsData";

function PlacementsPage() {
  const [filterEligible, setFilterEligible] = useState(false);
  const [appliedDrives, setAppliedDrives] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const displayedDrives = filterEligible
    ? campusDrives.filter((drive) => drive.isEligible)
    : campusDrives;

  const handleApply = (driveId, company) => {
    setAppliedDrives((prev) => ({ ...prev, [driveId]: true }));
    setAlertMessage(`Application submitted successfully for ${company}!`);
    setTimeout(() => setAlertMessage(""), 4000);
  };

  return (
    <main className="dashboard">
      <PageHeader
        icon="💼"
        title="Training & Placements"
        subtitle="Explore campus recruitment drives, review eligibility, and track applications."
      />

      {alertMessage && (
        <div className="placement-alert">
          <span>✅</span> {alertMessage}
        </div>
      )}

      {/* Placement Readiness Overview */}
      <div className="academic-overview">
        <ProgressStatCard
          title="Placement Readiness"
          value={placementStats.readinessScore}
          max={100}
          status="Eligible for Tier 1"
        />

        <InfoStatCard
          icon="🏢"
          title="Eligible Drives"
          value={placementStats.eligibleDrivesCount}
          status="Open campus drives"
        />

        <InfoStatCard
          icon="🎯"
          title="Shortlisted"
          value={placementStats.shortlistsCount}
          status="Active interview stages"
        />
      </div>

      {/* Campus Recruitment Drives */}
      <InfoPanel icon="🚀" title="Campus Recruitment Drives">
        <div className="drive-filter-bar">
          <button
            className={`filter-btn ${!filterEligible ? "active" : ""}`}
            onClick={() => setFilterEligible(false)}
          >
            All Drives ({campusDrives.length})
          </button>
          <button
            className={`filter-btn ${filterEligible ? "active" : ""}`}
            onClick={() => setFilterEligible(true)}
          >
            Eligible Only ({campusDrives.filter((d) => d.isEligible).length})
          </button>
        </div>

        <div className="drives-grid">
          {displayedDrives.map((drive) => {
            const hasApplied = !!appliedDrives[drive.id];

            return (
              <div key={drive.id} className="drive-card">
                <div className="drive-card-top">
                  <div>
                    <h3 className="company-name">{drive.company}</h3>
                    <p className="job-role">{drive.role}</p>
                  </div>
                  <span className="ctc-pill">{drive.package}</span>
                </div>

                <div className="drive-details">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-val">{drive.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Min CGPA:</span>
                    <span className="detail-val">{drive.minCgpa}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Deadline:</span>
                    <span className="detail-val">{drive.deadline}</span>
                  </div>
                </div>

                <div className="drive-card-bottom">
                  <span
                    className={`eligibility-badge ${
                      drive.isEligible ? "eligible" : "not-eligible"
                    }`}
                  >
                    {drive.isEligible ? "✓ Eligible" : "✗ Criteria Not Met"}
                  </span>

                  {drive.isEligible ? (
                    <PrimaryButton
                      text={hasApplied ? "Applied ✓" : "Apply Now"}
                      onClick={() =>
                        !hasApplied && handleApply(drive.id, drive.company)
                      }
                    />
                  ) : (
                    <button className="disabled-btn" disabled>
                      Locked
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </InfoPanel>

      {/* Application Status Pipeline */}
      <InfoPanel icon="📑" title="My Application Pipeline">
        <div className="assessment-table-container">
          <table className="assessment-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Applied Date</th>
                <th>Current Round</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {studentApplications.map((app) => (
                <tr key={app.id}>
                  <td>{app.company}</td>
                  <td>{app.role}</td>
                  <td>{app.appliedDate}</td>
                  <td>
                    <span className="round-badge">{app.currentRound}</span>
                  </td>
                  <td>
                    <span
                      className={`status-chip ${
                        app.status === "Offer Extended"
                          ? "chip-offer"
                          : "chip-progress"
                      }`}
                    >
                      {app.status}
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

export default PlacementsPage;
