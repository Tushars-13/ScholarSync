export const placementStats = {
  readinessScore: 85,
  eligibleDrivesCount: 6,
  appliedCount: 4,
  shortlistsCount: 2,
  offersCount: 1,
};

export const campusDrives = [
  {
    id: "DRV-001",
    company: "Tata Consultancy Services (TCS Digital)",
    role: "Software Development Engineer",
    package: "7.5 LPA",
    minCgpa: 6.5,
    location: "Noida / Bangalore",
    deadline: "22 Jul 2026",
    status: "Open",
    isEligible: true,
  },
  {
    id: "DRV-002",
    company: "Infosys Ltd.",
    role: "Specialist Programmer",
    package: "9.5 LPA",
    minCgpa: 7.0,
    location: "Pune / Hyderabad",
    deadline: "25 Jul 2026",
    status: "Open",
    isEligible: true,
  },
  {
    id: "DRV-003",
    company: "Amazon Web Services",
    role: "Cloud Support Associate",
    package: "14.0 LPA",
    minCgpa: 7.5,
    location: "Hyderabad",
    deadline: "30 Jul 2026",
    status: "Open",
    isEligible: false, // Student has 7.10 CGPA
  },
  {
    id: "DRV-004",
    company: "Accenture",
    role: "Advanced App Engineering Analyst",
    package: "6.5 LPA",
    minCgpa: 6.5,
    location: "Gurugram / Remote",
    deadline: "02 Aug 2026",
    status: "Open",
    isEligible: true,
  },
];

export const studentApplications = [
  {
    id: "APP-01",
    company: "Cognizant Technology Solutions",
    role: "GenC Next Developer",
    appliedDate: "02 Jul 2026",
    currentRound: "Technical Interview",
    status: "Shortlisted",
  },
  {
    id: "APP-02",
    company: "Wipro Technologies",
    role: "Turbo Candidate",
    appliedDate: "28 Jun 2026",
    currentRound: "HR Round Completed",
    status: "Offer Extended",
  },
  {
    id: "APP-03",
    company: "Capgemini",
    role: "Senior Software Analyst",
    appliedDate: "20 Jun 2026",
    currentRound: "Online Assessment",
    status: "In Review",
  },
];
