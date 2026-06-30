import "./App.css";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import { Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import AcademicsPage from "./pages/AcademicsPage";

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="content">

        <Sidebar />

        <Routes>

          <Route path="/" element={<DashboardPage />} />

          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/academics" element={<AcademicsPage />} />

        </Routes>

      </div>

    </div>
  );
} 
export default App;