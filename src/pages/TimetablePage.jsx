import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import InfoStatCard from "../components/ui/InfoStatCard";
import InfoPanel from "../components/ui/InfoPanel";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  timetableSummary,
  weeklyTimetable,
} from "../data/timetableData";

function TimetablePage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [activeDay, setActiveDay] = useState("Monday");
  const [downloadNotice, setDownloadNotice] = useState("");

  const currentSchedule = weeklyTimetable[activeDay] || [];

  const handleDownload = () => {
    setDownloadNotice("Weekly timetable PDF downloaded successfully!");
    setTimeout(() => setDownloadNotice(""), 4000);
  };

  return (
    <main className="dashboard">
      <PageHeader
        icon="📅"
        title="Class Timetable"
        subtitle="Weekly academic schedules, lecture rooms, and laboratory sessions."
      />

      {downloadNotice && (
        <div className="timetable-alert">
          <span>📥</span> {downloadNotice}
        </div>
      )}

      {/* Timetable Overview Stats */}
      <div className="academic-overview">
        <InfoStatCard
          icon="📚"
          title="Weekly Classes"
          value={timetableSummary.totalWeeklyClasses}
          status="Lectures & Labs"
        />

        <InfoStatCard
          icon="🔬"
          title="Lab Hours"
          value={`${timetableSummary.labHours} hrs`}
          status="Practical sessions"
        />

        <InfoStatCard
          icon="🏛"
          title="Classroom Venue"
          value={timetableSummary.classroomDefault}
          status={timetableSummary.currentSemester}
        />
      </div>

      {/* Daily Schedule with Day Selector */}
      <InfoPanel icon="🗓" title="Daily Class Schedule">
        <div className="timetable-day-tabs">
          {days.map((day) => (
            <button
              key={day}
              className={`day-tab-btn ${activeDay === day ? "active" : ""}`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="timetable-list">
          {currentSchedule.length > 0 ? (
            currentSchedule.map((slot, index) => (
              <div key={index} className="timetable-slot-card">
                <div className="slot-time-block">
                  <span className="slot-time">{slot.time}</span>
                  <span
                    className={`slot-type-tag type-${slot.type.toLowerCase()}`}
                  >
                    {slot.type}
                  </span>
                </div>

                <div className="slot-details">
                  <div className="slot-header">
                    <h3>{slot.subject}</h3>
                    <span className="slot-code">{slot.code}</span>
                  </div>
                  <div className="slot-meta">
                    <span>👤 Faculty: {slot.faculty}</span>
                    <span>📍 Room: {slot.room}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-data-msg">No classes scheduled for {activeDay}.</p>
          )}
        </div>

        <div className="timetable-footer-actions">
          <PrimaryButton
            text="Download Timetable PDF"
            onClick={handleDownload}
          />
        </div>
      </InfoPanel>
    </main>
  );
}

export default TimetablePage;
