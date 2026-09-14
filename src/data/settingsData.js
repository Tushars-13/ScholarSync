export const initialProfileSettings = {
  fullName: "Tushar Shukla",
  enrollmentNo: "2201640100XX",
  rollNo: "220164010045",
  program: "B.Tech CSE (Data Science)",
  semester: "Semester 7",
  university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  personalEmail: "tushar@email.com",
  collegeEmail: "tushar.220164010045@aktu.ac.in",
  phone: "+91 98765 43210",
  linkedIn: "linkedin.com/in/tushar-shukla",
  github: "github.com/tushar-shukla",
};

export const initialNotificationSettings = [
  {
    id: "exam_alerts",
    title: "Exam & Assessment Schedules",
    desc: "Receive alerts 24 hours before internal tests and semester examinations",
    enabled: true,
    category: "Academic",
  },
  {
    id: "attendance_warnings",
    title: "Attendance Threshold Warnings",
    desc: "Instant alert when subject attendance drops near or below the mandatory 75% cutoff",
    enabled: true,
    category: "Academic",
  },
  {
    id: "placement_drives",
    title: "Campus Placement Drives",
    desc: "Immediate notifications when new eligible campus recruitment drives open",
    enabled: true,
    category: "Career",
  },
  {
    id: "fee_deadlines",
    title: "Fee Due & Invoice Reminders",
    desc: "Automated payment deadline notifications 7 days before fee due dates",
    enabled: true,
    category: "Financial",
  },
  {
    id: "weekly_digest",
    title: "Weekly Academic Digest",
    desc: "Consolidated weekend summary of weekly attendance, lectures, and test results",
    enabled: false,
    category: "General",
  },
];

export const initialAcademicPreferences = {
  defaultSemesterView: "Semester 7 (Current)",
  gradingScale: "10-Point Scale (CGPA)",
  timetableFormat: "Detailed Cards",
  minimumAttendanceWarning: "75% (AKTU Mandatory)",
};

export const initialSecuritySettings = {
  twoFactorAuth: false,
  lastPasswordChange: "15 May 2026",
  activeSessions: [
    {
      id: "sess-1",
      device: "Chrome on Windows 11 (Current Device)",
      location: "Lucknow, India",
      ip: "192.168.1.42",
      status: "Active Now",
    },
    {
      id: "sess-2",
      device: "Safari on iPhone 15",
      location: "Lucknow, India",
      ip: "103.21.144.6",
      status: "2 days ago",
    },
  ],
};

export const initialAppearanceSettings = {
  theme: "Light Mode (Standard)",
  compactView: false,
  animationsEnabled: true,
};
