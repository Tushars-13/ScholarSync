import PageHeader from "../components/layout/PageHeader";
import PrimaryButton from "../components/ui/PrimaryButton";
import ProgressStatCard from "../components/ui/ProgressStatCard";
import InfoStatCard from "../components/ui/InfoStatCard";
import AssessmentTable from "../components/ui/AssessmentTable";
import UpcomingExams from "../components/ui/UpcomingExams";

function AcademicsPage() {
  return (
    <main className="dashboard">

      <PageHeader
        icon="🎓"
        title="Academics"
        subtitle="Track your academic performance and semester progress."
      />

      {/* Academic Overview */}

      <div className="academic-overview">

        <ProgressStatCard
          title="Overall CGPA"
          value={7.10}
          max={10}
          status="Good Standing"
        />

        <InfoStatCard
          icon="📚"
          title="Active Backlogs"
          value="0"
          status="No Active Backlogs"
        />

        <InfoStatCard
          icon="🏆"
          title="Certificates"
          value="12"
          status="Certificates Earned"
        />

      </div>

      {/* Current Subjects */}

      <div className="panel">

        <h2>📚 Current Semester Subjects</h2>

        <ul>

          <li>Machine Learning</li>

          <li>Database Management System</li>

          <li>Design and Analysis of Algorithms</li>

          <li>Big Data Analytics</li>

          <li>Computer Networks</li>

        </ul>

      </div>

      {/* Internal Assessment */}

      <div className="panel">

        <h2>📝 Internal Assessments</h2>

        <AssessmentTable />

      </div>

      {/* Upcoming Exams */}

      <div className="panel">

        <h2>📅 Upcoming Exams</h2>

        <UpcomingExams />

      </div>

      {/* Semester Results */}

      <div className="panel">

        <h2>📄 Semester Results</h2>

        <PrimaryButton text="View All Results" />

      </div>

    </main>
  );
}

export default AcademicsPage;