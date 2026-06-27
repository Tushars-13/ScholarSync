import {
    FaCalendarAlt,
    FaGraduationCap,
    FaBrain,
    FaMoneyBillWave,
    FaBullhorn,
} from "react-icons/fa";
import { MdClass } from "react-icons/md";
import StatCard from "./StatCard";
import InfoPanel from "./InfoPanel";
import PageHeader from "./PageHeader";


function Dashboard() {
    return (
        <main className="dashboard">

            {/* Welcome Section */}

            <PageHeader
                icon="👋"
                title="Good Evening, Tushar"
                subtitle="Welcome back! Let's make today productive."
            />

            {/* Summary Cards */}

            <div className="cards">

                <StatCard
                    icon={<FaCalendarAlt />}
                    title="Attendance"
                    value="82%"
                />

                <StatCard
                    icon={<FaGraduationCap />}
                    title="CGPA"
                    value="7.10"
                />

                <StatCard
                    icon={<FaBrain />}
                    title="Assessments"
                    value="2 Active"
                />

                <StatCard
                    icon={<FaMoneyBillWave />}
                    title="Fees Due"
                    value="₹15,000"
                />


            </div>

            {/* Dashboard Panels */}

            <div className="dashboard-grid">

                <InfoPanel
                    icon="📢"
                    title="Announcements"
                >

                    <ul>

                        <li>DBMS Quiz on Monday</li>

                        <li>Placement Drive starts next week</li>

                        <li>Hackathon registrations are open</li>

                    </ul>

                </InfoPanel>

                <InfoPanel
                    icon="📅"
                    title="Today's Classes"
                >

                    <ul>

                        <li>DBMS — 10:00 AM</li>

                        <li>Machine Learning — 12:00 PM</li>

                        <li>DSA — 2:00 PM</li>

                    </ul>

                </InfoPanel>

            </div>

        </main>
    );
}

export default Dashboard;