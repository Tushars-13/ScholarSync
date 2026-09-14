import "./App.css";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import { Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import AcademicsPage from "./pages/AcademicsPage";
import AssessmentsPage from "./pages/AssessmentsPage";
import TimetablePage from "./pages/TimetablePage";
import PlacementsPage from "./pages/PlacementsPage";
import FeesPage from "./pages/FeesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AIAssistantPage from "./pages/AIAssistantPage";
import SettingsPage from "./pages/SettingsPage";

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

          <Route path="/assessments" element={<AssessmentsPage />} />

          <Route path="/timetable" element={<TimetablePage />} />

          <Route path="/placements" element={<PlacementsPage />} />

          <Route path="/fees" element={<FeesPage />} />

          <Route path="/analytics" element={<AnalyticsPage />} />

          <Route path="/ai-assistant" element={<AIAssistantPage />} />

          <Route path="/settings" element={<SettingsPage />} />

        </Routes>

      </div>

    </div>
  );
} 
export default App;