import PageHeader from "../components/layout/PageHeader";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useStudentProfile } from "../context/useStudentProfile";

function ProfilePage() {
  const { profile } = useStudentProfile();

  // Generate initials from the full name for the avatar
  const initials = profile.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="dashboard">

      <PageHeader
        icon="👤"
        title="Student Profile"
        subtitle="Manage your personal and academic information."
      />

      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            {initials}
          </div>

          <div>

            <h2>{profile.fullName}</h2>

            <p>B.Tech CSE - Data Science</p>

            <p>AKTU University</p>

          </div>

        </div>

        <hr />

        <div className="profile-details">

          <p><strong>Enrollment No:</strong> {profile.enrollmentNo}</p>

          <p><strong>Semester:</strong> 7</p>

          <p><strong>CGPA:</strong> 7.10</p>

          <p><strong>Email:</strong> {profile.personalEmail}</p>

          <p><strong>Phone:</strong> {profile.phone}</p>

        </div>

        <hr />

        <h3>Skills</h3>

        <div className="skills">

          <span>Python</span>

          <span>Java</span>

          <span>React</span>

          <span>SQL</span>

          <span>Machine Learning</span>

        </div>

        <PrimaryButton
          text="Edit Profile"
        />

      </div>

    </main>
  );
}

export default ProfilePage;