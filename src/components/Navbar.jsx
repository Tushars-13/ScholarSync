function Navbar({ name }) {
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
        <span>👤 {name}</span>
      </div>

    </nav>
  );
}

export default Navbar;