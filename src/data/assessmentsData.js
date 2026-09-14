export const assessmentStats = {
  completionRate: 75,
  activeTests: 3,
  completedTests: 18,
  streakDays: 5,
};

export const assessmentCategories = [
  { id: "all", name: "All Tests" },
  { id: "coding", name: "Coding & DSA" },
  { id: "aptitude", name: "Quantitative Aptitude" },
  { id: "reasoning", name: "Logical Reasoning" },
  { id: "sql", name: "SQL & Databases" },
];

export const activeAssessments = [
  {
    id: "AST-101",
    title: "Data Structures & Algorithms - Trees & Graphs",
    category: "coding",
    questions: 25,
    duration: "60 mins",
    deadline: "18 Jul 2026",
    difficulty: "Medium",
    status: "Active",
  },
  {
    id: "AST-102",
    title: "SQL Joins & Aggregation Masterclass",
    category: "sql",
    questions: 20,
    duration: "45 mins",
    deadline: "20 Jul 2026",
    difficulty: "Hard",
    status: "Active",
  },
  {
    id: "AST-103",
    title: "Quantitative Aptitude - Probability & Permutations",
    category: "aptitude",
    questions: 30,
    duration: "40 mins",
    deadline: "22 Jul 2026",
    difficulty: "Medium",
    status: "Active",
  },
  {
    id: "AST-104",
    title: "Logical Deductions & Syllogisms",
    category: "reasoning",
    questions: 25,
    duration: "35 mins",
    deadline: "24 Jul 2026",
    difficulty: "Easy",
    status: "Upcoming",
  },
];

export const assessmentHistory = [
  {
    id: "HST-001",
    subject: "Machine Learning Foundations",
    category: "Technical",
    date: "10 Jul 2026",
    score: "28 / 30",
    percentage: "93%",
    status: "Passed",
  },
  {
    id: "HST-002",
    subject: "DBMS Normalization & Indexing",
    category: "Technical",
    date: "05 Jul 2026",
    score: "24 / 30",
    percentage: "80%",
    status: "Passed",
  },
  {
    id: "HST-003",
    subject: "Array & String Manipulation",
    category: "Coding",
    date: "28 Jun 2026",
    score: "30 / 30",
    percentage: "100%",
    status: "Passed",
  },
];
