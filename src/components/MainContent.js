import { User, FileText, Bell, Menu } from "lucide-react";
import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <Menu className="menu-icon" />
          <h1 className="title">Student Dashboard</h1>
        </div>
        <div className="header-right">
          <span className="username">Annie Frank</span>
          <div className="profile-avatar">
            <span className="avatar-text">AF</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Stats Cards */}
        <div className="stats-cards">
          <StatCard
            title="Exams"
            count={1}
            description="Total number of exams"
            icon={<User className="icon" />}
            iconBg="blue-bg"
            iconColor="blue-color"
          />
          <StatCard
            title="Attempts"
            count={1}
            description="Total number of attempted exams"
            icon={<FileText className="icon" />}
            iconBg="green-bg"
            iconColor="green-color"
          />
          <StatCard
            title="Announcements"
            count={1}
            description="Total number of messages received"
            icon={<Bell className="icon" />}
            iconBg="red-bg"
            iconColor="red-color"
          />
        </div>

        {/* Instructions */}
        <div className="instructions">
          <h2 className="instructions-title">:: General Instructions ::</h2>
          <div className="instructions-content">
            <p>You are only allowed to start the test at the prescribed time...</p>
            <p>You can see the history of tests taken and scores in the Results section.</p>
            <p>To start the test, click on 'Start' button in the exam section.</p>
            <p>Once the test is started the timer would run irrespective of your logged in or logged out status.</p>
            <p>To mark an answer you need to select the option. Upon locking the selected options button will "blue".</p>
            <p>To reset the form click on the reset button at the bottom.</p>
            <p>The assigned tests should be completed within the submission time.</p>
            <p>The marks will be calculated and displayed instantly in the result section along with your percentage.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ title, count, description, icon, iconBg, iconColor }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-left">
        <h3 className="stat-card-title">{title}</h3>
        <p className="stat-card-count">{count}</p>
        <p className="stat-card-description">{description}</p>
      </div>
      <div className={`stat-card-icon ${iconBg} ${iconColor}`}>
        {icon}
      </div>
    </div>
  );
};

export default StudentDashboard;
