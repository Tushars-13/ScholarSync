import PageHeader from "../components/layout/PageHeader";
import PrimaryButton from "../components/ui/PrimaryButton";
import AcademicStatCard from "../components/ui/AcademicStatCard";

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

        <AcademicStatCard
          icon="🎓"
          title="Overall CGPA"
          value="7.10"
          status="Good Standing"
        />

        <AcademicStatCard
          icon="📚"
          title="Active Backlogs"
          value="0"
          status="No Active Backlogs"
        />

        <AcademicStatCard
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

        <p>
          Assessment table will be added in the next task.
        </p>

      </div>

      {/* Upcoming Exams */}

      <div className="panel">

        <h2>📅 Upcoming Exams</h2>

        <p>
          Exam schedule will be added in the next task.
        </p>

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