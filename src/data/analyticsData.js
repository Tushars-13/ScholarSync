export const analyticsOverview = {
  cgpa: 7.10,
  cgpaMax: 10,
  cgpaChange: "+0.20 vs Sem 6",
  avgAttendance: "82%",
  attendanceStatus: "Above 75% Threshold",
  assessmentAverage: "86.5%",
  assessmentPercentile: "Top 15% in Section",
  placementIndex: "85 / 100",
  placementEligibility: "Eligible for Tier-1",
  classRank: "14 of 120",
};

export const semesterGpaProgression = [
  { semester: "Sem 1", sgpa: 6.80, credits: 22, status: "Cleared" },
  { semester: "Sem 2", sgpa: 7.00, credits: 24, status: "Cleared" },
  { semester: "Sem 3", sgpa: 6.90, credits: 23, status: "Cleared" },
  { semester: "Sem 4", sgpa: 7.20, credits: 25, status: "Cleared" },
  { semester: "Sem 5", sgpa: 7.30, credits: 24, status: "Cleared" },
  { semester: "Sem 6", sgpa: 7.40, credits: 22, status: "Cleared" },
  { semester: "Sem 7", sgpa: 7.60, credits: 20, status: "Projected" },
];

export const subjectBenchmarks = [
  {
    code: "CS701",
    subject: "Machine Learning",
    studentScore: 88,
    classAvg: 74,
    sectionHighest: 94,
    percentile: "Top 10%",
  },
  {
    code: "CS702",
    subject: "Database Management Systems",
    studentScore: 86,
    classAvg: 72,
    sectionHighest: 92,
    percentile: "Top 12%",
  },
  {
    code: "CS703",
    subject: "Design & Analysis of Algorithms",
    studentScore: 78,
    classAvg: 68,
    sectionHighest: 90,
    percentile: "Top 20%",
  },
  {
    code: "CS704",
    subject: "Big Data Analytics",
    studentScore: 84,
    classAvg: 70,
    sectionHighest: 91,
    percentile: "Top 15%",
  },
  {
    code: "CS705",
    subject: "Computer Networks",
    studentScore: 80,
    classAvg: 71,
    sectionHighest: 89,
    percentile: "Top 18%",
  },
];

export const attendanceBreakdown = [
  {
    subject: "Machine Learning",
    attended: 34,
    total: 40,
    percentage: 85,
    status: "Safe",
    advice: "Can miss 2 classes safely",
  },
  {
    subject: "Database Management Systems",
    attended: 36,
    total: 42,
    percentage: 86,
    status: "Safe",
    advice: "Can miss 2 classes safely",
  },
  {
    subject: "Design & Analysis of Algorithms",
    attended: 28,
    total: 38,
    percentage: 74,
    status: "Warning",
    advice: "Must attend next 2 classes to cross 75%",
  },
  {
    subject: "Big Data Analytics",
    attended: 32,
    total: 38,
    percentage: 84,
    status: "Safe",
    advice: "Can miss 1 class safely",
  },
  {
    subject: "Computer Networks",
    attended: 30,
    total: 37,
    percentage: 81,
    status: "Safe",
    advice: "Can miss 1 class safely",
  },
];

export const skillCompetencies = [
  { skill: "Python & Data Science", proficiency: 86, level: "Advanced" },
  { skill: "SQL & Relational Databases", proficiency: 88, level: "Advanced" },
  { skill: "Machine Learning & AI", proficiency: 82, level: "Proficient" },
  { skill: "Data Structures & Algorithms", proficiency: 78, level: "Proficient" },
  { skill: "React & Web Development", proficiency: 75, level: "Intermediate" },
];
