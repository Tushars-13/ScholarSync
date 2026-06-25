function Navbar({ name }) {
  return (
    <nav className="navbar">
      <h2>ScholarSync</h2>
      
      <div className="nav-right">
        <span>🔔</span>
        <span>👤 {name}</span>
      </div>
    </nav>
  );
}

export default Navbar;