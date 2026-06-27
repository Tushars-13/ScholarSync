function ProfilePage() {
  return (
    <main className="dashboard">

      <div className="welcome">
        <h1>👤 Student Profile</h1>
        <p>Manage your personal and academic information.</p>
      </div>

      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            TS
          </div>

          <div>

            <h2>Tushar Shukla</h2>

            <p>B.Tech CSE - Data Science</p>

            <p>AKTU University</p>

          </div>

        </div>

        <hr />

        <div className="profile-details">

          <p><strong>Enrollment No:</strong> 2201640100XX</p>

          <p><strong>Semester:</strong> 7</p>

          <p><strong>CGPA:</strong> 7.10</p>

          <p><strong>Email:</strong> tushar@email.com</p>

          <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>

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

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>

    </main>
  );
}

export default ProfilePage;