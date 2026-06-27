import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/", icon: "🏠" },
  { name: "Profile", path: "/profile", icon: "👤" },
  { name: "Academics", path: "/academics", icon: "🎓" },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="sidebar-logo">ScholarSync</h2>

      <ul>

        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path}>
              {item.icon} {item.name}
            </NavLink>
          </li>
        ))}

        <li>🧠 Assessments</li>

        <li>📅 Timetable</li>

        <li>💼 Placements</li>

        <li>💰 Fees</li>

        <li>🤖 AI Assistant</li>

        <li>📊 Analytics</li>

        <li>⚙ Settings</li>

      </ul>

    </aside>
  );
}

export default Sidebar;