import { useStudentProfile } from "../../context/useStudentProfile";

function Navbar() {
  const { profile } = useStudentProfile();

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>ScholarSync</h2>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="nav-right">
        <span>🔔</span>
        <span>👤 {profile.fullName}</span>
      </div>

    </nav>
  );
}

export default Navbar;