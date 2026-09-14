import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/", icon: "🏠" },
  { name: "Profile", path: "/profile", icon: "👤" },
  { name: "Academics", path: "/academics", icon: "🎓" },
  { name: "Assessments", path: "/assessments", icon: "🧠" },
  { name: "Timetable", path: "/timetable", icon: "📅" },
  { name: "Placements", path: "/placements", icon: "💼" },
  { name: "Fees", path: "/fees", icon: "💰" },
  { name: "Analytics", path: "/analytics", icon: "📊" },
  { name: "AI Assistant", path: "/ai-assistant", icon: "🤖" },
  { name: "Settings", path: "/settings", icon: "⚙️" },
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

      </ul>

    </aside>
  );
}

export default Sidebar;