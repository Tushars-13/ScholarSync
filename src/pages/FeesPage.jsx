import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import ProgressStatCard from "../components/ui/ProgressStatCard";
import InfoStatCard from "../components/ui/InfoStatCard";
import InfoPanel from "../components/ui/InfoPanel";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  feeSummary,
  feeBreakdown,
  paymentHistory,
} from "../data/feesData";

function FeesPage() {
  const [notification, setNotification] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("UPI (Google Pay / PhonePe)");

  const currentDueAmount = isPaid ? "₹0" : feeSummary.amountDue;
  const currentPaidAmount = isPaid ? feeSummary.totalFees : feeSummary.amountPaid;
  const currentProgress = isPaid ? 100 : feeSummary.percentagePaid;
  const currentStatus = isPaid ? "All Fees Cleared" : feeSummary.paymentStatus;

  const handleDownloadReceipt = (receiptId, desc) => {
    setNotification(`Receipt ${receiptId} (${desc}) downloaded successfully!`);
    setTimeout(() => setNotification(""), 4000);
  };

  const handleProcessPayment = () => {
    setIsPaid(true);
    setShowPaymentModal(false);
    setNotification(
      "Payment of ₹15,000 processed successfully via " +
        selectedMethod +
        "! Transaction ID: TXN-549102"
    );
    setTimeout(() => setNotification(""), 5000);
  };

  return (
    <main className="dashboard">
      <PageHeader
        icon="💰"
        title="Fees & Payments"
        subtitle="View your fee status, semester breakdown, payment history, and upcoming deadlines."
      />

      {notification && (
        <div className="fees-alert">
          <span>🔔</span> {notification}
        </div>
      )}

      {/* Summary KPI Cards */}
      <div className="academic-overview">
        <ProgressStatCard
          title="Fee Paid %"
          value={currentProgress}
          max={100}
          status={isPaid ? "100% Cleared" : `${currentProgress}% Paid`}
        />

        <InfoStatCard
          icon="💵"
          title="Total Fees"
          value={feeSummary.totalFees}
          status={feeSummary.academicYear}
        />

        <InfoStatCard
          icon="✅"
          title="Amount Paid"
          value={currentPaidAmount}
          status="Verified Receipts"
        />

        <InfoStatCard
          icon={isPaid ? "🎉" : "⚠️"}
          title="Amount Due"
          value={currentDueAmount}
          status={isPaid ? "No Outstanding Dues" : `Due by ${feeSummary.dueDate}`}
        />
      </div>

      {/* Payment Due Action Banner */}
      <div className={`fee-due-card ${isPaid ? "due-cleared" : ""}`}>
        <div className="due-card-left">
          <div className="due-card-icon">{isPaid ? "🎉" : "💳"}</div>
          <div>
            <h3>
              {isPaid
                ? "All Semester 7 Fees Have Been Paid!"
                : "Upcoming Payment Deadline"}
            </h3>
            <p>
              {isPaid
                ? "Your academic fees for Semester 7 are completely cleared. No pending balance."
                : `Outstanding balance of ${currentDueAmount} is due on or before ${feeSummary.dueDate}.`}
            </p>
          </div>
        </div>

        <div className="due-card-right">
          <span
            className={`payment-status-badge ${
              isPaid ? "badge-success" : "badge-pending"
            }`}
          >
            ● {currentStatus}
          </span>
          {!isPaid && (
            <PrimaryButton
              text="Pay Outstanding Fee"
              onClick={() => setShowPaymentModal(true)}
            />
          )}
        </div>
      </div>

      {/* Current Fee Breakdown */}
      <InfoPanel icon="📑" title="Current Semester Fee Breakdown">
        <div className="assessment-table-container">
          <table className="assessment-table fee-breakdown-table">
            <thead>
              <tr>
                <th>Fee Component</th>
                <th>Due / Billing Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {feeBreakdown.map((item) => {
                const itemStatus = isPaid && item.status === "Due" ? "Paid" : item.status;
                return (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.component}</strong>
                    </td>
                    <td>{item.dueDate}</td>
                    <td className="fee-amount-cell">{item.amount}</td>
                    <td>
                      <span
                        className={`fee-status-badge ${
                          itemStatus === "Paid" ? "fee-paid" : "fee-due"
                        }`}
                      >
                        {itemStatus}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="fee-total-row">
                <td colSpan="2">
                  <strong>Total Fee (Semester 7)</strong>
                </td>
                <td className="fee-amount-cell">
                  <strong>{feeSummary.totalFees}</strong>
                </td>
                <td>
                  <span className="fee-balance-info">
                    {isPaid ? "Balance: ₹0" : "Balance Due: ₹15,000"}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </InfoPanel>

      {/* Payment History & Receipts */}
      <InfoPanel icon="📜" title="Payment History & Receipts">
        <div className="assessment-table-container">
          <table className="assessment-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Payment Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((tx) => (
                <tr key={tx.id}>
                  <td className="txn-id-cell">{tx.id}</td>
                  <td>{tx.date}</td>
                  <td>{tx.description}</td>
                  <td className="fee-amount-cell">{tx.amount}</td>
                  <td>{tx.method}</td>
                  <td>
                    <span className="fee-status-badge fee-paid">
                      {tx.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="download-receipt-btn"
                      onClick={() =>
                        handleDownloadReceipt(tx.receiptId, tx.description)
                      }
                      title={`Download ${tx.receiptId}`}
                    >
                      📥 Download Receipt
                    </button>
                  </td>
                </tr>
              ))}
              {isPaid && (
                <tr className="new-txn-row">
                  <td className="txn-id-cell">TXN-549102</td>
                  <td>Today</td>
                  <td>Advanced Computing Lab & University ERP Fee</td>
                  <td className="fee-amount-cell">₹15,000</td>
                  <td>{selectedMethod}</td>
                  <td>
                    <span className="fee-status-badge fee-paid">Successful</span>
                  </td>
                  <td>
                    <button
                      className="download-receipt-btn"
                      onClick={() =>
                        handleDownloadReceipt(
                          "RCPT-2026-0205",
                          "Advanced Computing Lab & University ERP Fee"
                        )
                      }
                    >
                      📥 Download Receipt
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </InfoPanel>

      {/* Mock Payment Dialog Modal */}
      {showPaymentModal && (
        <div className="payment-modal-overlay">
          <div className="payment-modal-content">
            <div className="modal-header">
              <h3>Secure Student Fee Payment</h3>
              <button
                className="close-modal-btn"
                onClick={() => setShowPaymentModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-due-summary">
                <span>Outstanding Balance:</span>
                <h2>₹15,000</h2>
                <p>Fee Head: Advanced Computing Lab & University ERP</p>
              </div>

              <div className="payment-method-selection">
                <label>Select Payment Method:</label>
                <div className="method-options">
                  {[
                    "UPI (Google Pay / PhonePe / Paytm)",
                    "Net Banking (HDFC / SBI / ICICI)",
                    "Debit / Credit Card",
                    "NEFT / RTGS Virtual Account",
                  ].map((method) => (
                    <label key={method} className="method-option-label">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={selectedMethod === method}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="cancel-btn"
                onClick={() => setShowPaymentModal(false)}
              >
                Cancel
              </button>
              <PrimaryButton
                text="Confirm & Pay ₹15,000"
                onClick={handleProcessPayment}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default FeesPage;
