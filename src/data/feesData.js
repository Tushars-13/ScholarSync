export const feeSummary = {
  totalFees: "₹1,25,000",
  totalAmountNum: 125000,
  amountPaid: "₹1,10,000",
  amountPaidNum: 110000,
  amountDue: "₹15,000",
  amountDueNum: 15000,
  percentagePaid: 88,
  dueDate: "31 Jul 2026",
  paymentStatus: "Pending Payment",
  academicYear: "2026 - 2027",
  semester: "Semester 7",
  enrollmentNo: "2201640100XX",
};

export const feeBreakdown = [
  {
    id: "FEE-01",
    component: "Tuition Fee",
    amount: "₹75,000",
    status: "Paid",
    dueDate: "15 Jun 2026",
  },
  {
    id: "FEE-02",
    component: "University Examination Fee",
    amount: "₹7,500",
    status: "Paid",
    dueDate: "20 Jun 2026",
  },
  {
    id: "FEE-03",
    component: "Library & Digital Resources Fee",
    amount: "₹5,000",
    status: "Paid",
    dueDate: "20 Jun 2026",
  },
  {
    id: "FEE-04",
    component: "Campus Development & Infrastructure Fee",
    amount: "₹12,500",
    status: "Paid",
    dueDate: "20 Jun 2026",
  },
  {
    id: "FEE-05",
    component: "Training & Placement (TNP) Corporate Readiness Fee",
    amount: "₹10,000",
    status: "Paid",
    dueDate: "28 Jun 2026",
  },
  {
    id: "FEE-06",
    component: "Advanced Computing Lab & University ERP Fee",
    amount: "₹15,000",
    status: "Due",
    dueDate: "31 Jul 2026",
  },
];

export const paymentHistory = [
  {
    id: "TXN-984210",
    date: "15 Jun 2026",
    description: "Semester 7 Tuition & Development Fee",
    amount: "₹87,500",
    method: "Net Banking (HDFC)",
    status: "Successful",
    receiptId: "RCPT-2026-0041",
  },
  {
    id: "TXN-873119",
    date: "20 Jun 2026",
    description: "Semester 7 Examination & Library Fee",
    amount: "₹12,500",
    method: "UPI (PhonePe)",
    status: "Successful",
    receiptId: "RCPT-2026-0082",
  },
  {
    id: "TXN-761942",
    date: "28 Jun 2026",
    description: "TNP Corporate Readiness & Training Fee",
    amount: "₹10,000",
    method: "Debit Card (SBI)",
    status: "Successful",
    receiptId: "RCPT-2026-0129",
  },
];

export const paymentMethods = [
  { id: "upi", name: "UPI (Google Pay / PhonePe / Paytm)" },
  { id: "netbanking", name: "Internet Banking (All Major Indian Banks)" },
  { id: "cards", name: "Debit / Credit Card (Visa / MasterCard / RuPay)" },
  { id: "challan", name: "NEFT / RTGS Offline Bank Challan" },
];
