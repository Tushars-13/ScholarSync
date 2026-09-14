import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import InfoPanel from "../components/ui/InfoPanel";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useStudentProfile } from "../context/useStudentProfile";
import {
  initialNotificationSettings,
  initialAcademicPreferences,
  initialSecuritySettings,
  initialAppearanceSettings,
} from "../data/settingsData";

function SettingsPage() {
  // ── Shared profile state (context + localStorage) ────────────────
  const { profile: savedProfile, updateProfile } = useStudentProfile();

  // Local draft — edits live here until the user clicks Save Profile
  const [profile, setProfile] = useState({ ...savedProfile });
  const [notifications, setNotifications] = useState(
    initialNotificationSettings.map((n) => ({ ...n }))
  );
  const [academicPrefs, setAcademicPrefs] = useState({
    ...initialAcademicPreferences,
  });
  const [security, setSecurity] = useState({ ...initialSecuritySettings });
  const [appearance, setAppearance] = useState({ ...initialAppearanceSettings });

  const [savedSection, setSavedSection] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleSaveSection = (section, label) => {
    // For the profile section, commit the draft to the shared context + localStorage
    if (section === "profile") {
      updateProfile(profile);
    }
    setSavedSection(section);
    showToast(`✅ ${label} saved successfully!`);
    setTimeout(() => setSavedSection(""), 2000);
  };

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  // Reset restores the last *saved* context value, not the hard-coded defaults
  const handleResetProfile = () => {
    setProfile({ ...savedProfile });
    showToast("Profile reset to last saved values.");
  };

  const handleToggleNotification = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n))
    );
  };

  const handleAcademicPrefChange = (field, value) => {
    setAcademicPrefs((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggle2FA = () => {
    setSecurity((prev) => ({ ...prev, twoFactorAuth: !prev.twoFactorAuth }));
    showToast(
      security.twoFactorAuth
        ? "Two-Factor Authentication disabled."
        : "Two-Factor Authentication enabled."
    );
  };

  const handleRevokeSession = (sessionId) => {
    setSecurity((prev) => ({
      ...prev,
      activeSessions: prev.activeSessions.filter((s) => s.id !== sessionId),
    }));
    showToast("Session revoked successfully.");
  };

  const handleChangePassword = () => {
    if (!passwordForm.current || !passwordForm.newPass || !passwordForm.confirm) {
      showToast("⚠️ Please fill all password fields.");
      return;
    }
    if (passwordForm.newPass !== passwordForm.confirm) {
      showToast("⚠️ New password and confirmation do not match.");
      return;
    }
    if (passwordForm.newPass.length < 8) {
      showToast("⚠️ Password must be at least 8 characters.");
      return;
    }
    setSecurity((prev) => ({ ...prev, lastPasswordChange: "Today" }));
    setPasswordForm({ current: "", newPass: "", confirm: "" });
    setShowPasswordForm(false);
    showToast("✅ Password changed successfully!");
  };

  const handleAppearanceChange = (field, value) => {
    setAppearance((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="dashboard">
      <PageHeader
        icon="⚙️"
        title="Settings"
        subtitle="Manage your account, preferences, notifications, security, and appearance."
      />

      {toastMessage && (
        <div className="settings-toast">
          <span>🔔</span> {toastMessage}
        </div>
      )}

      {/* ── Account & Profile ───────────────────────────────────── */}
      <InfoPanel icon="👤" title="Account & Profile">
        <div className="settings-form-grid">
          <div className="settings-field">
            <label className="settings-label">Full Name</label>
            <input
              className="settings-input"
              value={profile.fullName}
              onChange={(e) => handleProfileChange("fullName", e.target.value)}
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">Enrollment Number</label>
            <input
              className="settings-input settings-input-readonly"
              value={profile.enrollmentNo}
              readOnly
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">Roll Number</label>
            <input
              className="settings-input settings-input-readonly"
              value={profile.rollNo}
              readOnly
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">Program</label>
            <input
              className="settings-input settings-input-readonly"
              value={profile.program}
              readOnly
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">Current Semester</label>
            <input
              className="settings-input settings-input-readonly"
              value={profile.semester}
              readOnly
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">University</label>
            <input
              className="settings-input settings-input-readonly"
              value={profile.university}
              readOnly
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">Personal Email</label>
            <input
              className="settings-input"
              type="email"
              value={profile.personalEmail}
              onChange={(e) =>
                handleProfileChange("personalEmail", e.target.value)
              }
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">College Email</label>
            <input
              className="settings-input settings-input-readonly"
              value={profile.collegeEmail}
              readOnly
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">Phone Number</label>
            <input
              className="settings-input"
              value={profile.phone}
              onChange={(e) => handleProfileChange("phone", e.target.value)}
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">LinkedIn Profile</label>
            <input
              className="settings-input"
              value={profile.linkedIn}
              onChange={(e) => handleProfileChange("linkedIn", e.target.value)}
            />
          </div>

          <div className="settings-field">
            <label className="settings-label">GitHub Profile</label>
            <input
              className="settings-input"
              value={profile.github}
              onChange={(e) => handleProfileChange("github", e.target.value)}
            />
          </div>
        </div>

        <div className="settings-readonly-note">
          🔒 Fields marked with a lock icon are managed by the university ERP
          and cannot be edited directly.
        </div>

        <div className="settings-actions">
          <button className="settings-cancel-btn" onClick={handleResetProfile}>
            Reset Changes
          </button>
          <PrimaryButton
            text={savedSection === "profile" ? "✓ Saved!" : "Save Profile"}
            onClick={() => handleSaveSection("profile", "Profile")}
          />
        </div>
      </InfoPanel>

      {/* ── Notification Preferences ─────────────────────────────── */}
      <InfoPanel icon="🔔" title="Notification Preferences">
        <div className="settings-notifications-list">
          {notifications.map((notif) => (
            <div key={notif.id} className="notif-row">
              <div className="notif-info">
                <div className="notif-header">
                  <span className="notif-title">{notif.title}</span>
                  <span className="notif-category-badge">{notif.category}</span>
                </div>
                <p className="notif-desc">{notif.desc}</p>
              </div>
              <div
                className={`settings-toggle ${notif.enabled ? "toggle-on" : "toggle-off"}`}
                onClick={() => handleToggleNotification(notif.id)}
                role="switch"
                aria-checked={notif.enabled}
                title={notif.enabled ? "Disable notification" : "Enable notification"}
              >
                <div className="toggle-knob" />
              </div>
            </div>
          ))}
        </div>

        <div className="settings-actions">
          <PrimaryButton
            text={savedSection === "notifications" ? "✓ Saved!" : "Save Preferences"}
            onClick={() =>
              handleSaveSection("notifications", "Notification Preferences")
            }
          />
        </div>
      </InfoPanel>

      {/* ── Academic Preferences ─────────────────────────────────── */}
      <InfoPanel icon="🎓" title="Academic Preferences">
        <div className="settings-form-grid">
          <div className="settings-field">
            <label className="settings-label">Default Semester View</label>
            <select
              className="settings-select"
              value={academicPrefs.defaultSemesterView}
              onChange={(e) =>
                handleAcademicPrefChange("defaultSemesterView", e.target.value)
              }
            >
              {[
                "Semester 7 (Current)",
                "Semester 6",
                "Semester 5",
                "All Semesters",
              ].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="settings-field">
            <label className="settings-label">Grading Scale</label>
            <select
              className="settings-select"
              value={academicPrefs.gradingScale}
              onChange={(e) =>
                handleAcademicPrefChange("gradingScale", e.target.value)
              }
            >
              {[
                "10-Point Scale (CGPA)",
                "Percentage (%)",
                "Letter Grades (A–F)",
              ].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="settings-field">
            <label className="settings-label">Timetable Format</label>
            <select
              className="settings-select"
              value={academicPrefs.timetableFormat}
              onChange={(e) =>
                handleAcademicPrefChange("timetableFormat", e.target.value)
              }
            >
              {["Detailed Cards", "Compact Grid", "List View"].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="settings-field">
            <label className="settings-label">Attendance Warning Threshold</label>
            <select
              className="settings-select"
              value={academicPrefs.minimumAttendanceWarning}
              onChange={(e) =>
                handleAcademicPrefChange(
                  "minimumAttendanceWarning",
                  e.target.value
                )
              }
            >
              {[
                "75% (AKTU Mandatory)",
                "80% (Higher Threshold)",
                "85% (Stricter Alert)",
              ].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="settings-actions">
          <button
            className="settings-cancel-btn"
            onClick={() => setAcademicPrefs({ ...initialAcademicPreferences })}
          >
            Reset to Default
          </button>
          <PrimaryButton
            text={
              savedSection === "academic" ? "✓ Saved!" : "Save Preferences"
            }
            onClick={() =>
              handleSaveSection("academic", "Academic Preferences")
            }
          />
        </div>
      </InfoPanel>

      {/* ── Security & Password ───────────────────────────────────── */}
      <InfoPanel icon="🔐" title="Security & Password">
        {/* 2FA toggle */}
        <div className="security-option-row">
          <div className="security-option-info">
            <h4>Two-Factor Authentication (2FA)</h4>
            <p>
              Require a secondary verification code each time you sign in to
              ScholarSync.
            </p>
          </div>
          <div
            className={`settings-toggle ${security.twoFactorAuth ? "toggle-on" : "toggle-off"}`}
            onClick={handleToggle2FA}
            role="switch"
            aria-checked={security.twoFactorAuth}
          >
            <div className="toggle-knob" />
          </div>
        </div>

        {/* Password change */}
        <div className="security-option-row">
          <div className="security-option-info">
            <h4>Change Password</h4>
            <p>Last changed: {security.lastPasswordChange}</p>
          </div>
          <button
            className="settings-outline-btn"
            onClick={() => setShowPasswordForm((prev) => !prev)}
          >
            {showPasswordForm ? "Cancel" : "Change Password"}
          </button>
        </div>

        {showPasswordForm && (
          <div className="password-form">
            <div className="settings-field">
              <label className="settings-label">Current Password</label>
              <input
                className="settings-input"
                type="password"
                placeholder="Enter current password"
                value={passwordForm.current}
                onChange={(e) =>
                  setPasswordForm((prev) => ({
                    ...prev,
                    current: e.target.value,
                  }))
                }
              />
            </div>
            <div className="settings-field">
              <label className="settings-label">New Password</label>
              <input
                className="settings-input"
                type="password"
                placeholder="At least 8 characters"
                value={passwordForm.newPass}
                onChange={(e) =>
                  setPasswordForm((prev) => ({
                    ...prev,
                    newPass: e.target.value,
                  }))
                }
              />
            </div>
            <div className="settings-field">
              <label className="settings-label">Confirm New Password</label>
              <input
                className="settings-input"
                type="password"
                placeholder="Repeat new password"
                value={passwordForm.confirm}
                onChange={(e) =>
                  setPasswordForm((prev) => ({
                    ...prev,
                    confirm: e.target.value,
                  }))
                }
              />
            </div>
            <div className="settings-actions">
              <PrimaryButton
                text="Update Password"
                onClick={handleChangePassword}
              />
            </div>
          </div>
        )}

        {/* Active sessions */}
        <div className="sessions-section">
          <h4 className="sessions-title">Active Sessions</h4>
          <div className="sessions-list">
            {security.activeSessions.map((session) => (
              <div key={session.id} className="session-row">
                <div className="session-info">
                  <span className="session-device">{session.device}</span>
                  <span className="session-meta">
                    {session.location} · {session.ip}
                  </span>
                </div>
                <div className="session-right">
                  <span
                    className={`session-status-badge ${
                      session.status === "Active Now"
                        ? "session-active"
                        : "session-inactive"
                    }`}
                  >
                    {session.status}
                  </span>
                  {session.status !== "Active Now" && (
                    <button
                      className="revoke-session-btn"
                      onClick={() => handleRevokeSession(session.id)}
                    >
                      Revoke
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </InfoPanel>

      {/* ── Appearance & Preferences ─────────────────────────────── */}
      <InfoPanel icon="🎨" title="Appearance & Preferences">
        <div className="settings-form-grid">
          <div className="settings-field">
            <label className="settings-label">Theme</label>
            <select
              className="settings-select"
              value={appearance.theme}
              onChange={(e) => handleAppearanceChange("theme", e.target.value)}
            >
              {[
                "Light Mode (Standard)",
                "Dark Mode",
                "System Default",
              ].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Compact View toggle */}
        <div className="appearance-option-row">
          <div className="appearance-option-info">
            <h4>Compact View</h4>
            <p>Reduce padding and spacing for a denser information layout.</p>
          </div>
          <div
            className={`settings-toggle ${appearance.compactView ? "toggle-on" : "toggle-off"}`}
            onClick={() =>
              handleAppearanceChange("compactView", !appearance.compactView)
            }
            role="switch"
            aria-checked={appearance.compactView}
          >
            <div className="toggle-knob" />
          </div>
        </div>

        {/* Animations toggle */}
        <div className="appearance-option-row">
          <div className="appearance-option-info">
            <h4>Interface Animations</h4>
            <p>Enable smooth micro-animations and transitions across the ERP.</p>
          </div>
          <div
            className={`settings-toggle ${appearance.animationsEnabled ? "toggle-on" : "toggle-off"}`}
            onClick={() =>
              handleAppearanceChange(
                "animationsEnabled",
                !appearance.animationsEnabled
              )
            }
            role="switch"
            aria-checked={appearance.animationsEnabled}
          >
            <div className="toggle-knob" />
          </div>
        </div>

        <div className="settings-actions">
          <button
            className="settings-cancel-btn"
            onClick={() => setAppearance({ ...initialAppearanceSettings })}
          >
            Reset to Default
          </button>
          <PrimaryButton
            text={
              savedSection === "appearance" ? "✓ Saved!" : "Save Preferences"
            }
            onClick={() =>
              handleSaveSection("appearance", "Appearance Preferences")
            }
          />
        </div>
      </InfoPanel>
    </main>
  );
}

export default SettingsPage;
