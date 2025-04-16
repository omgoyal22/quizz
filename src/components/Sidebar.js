import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Toggle Button */}
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? "✖ " : "☰ "}
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <h2>Student Portal</h2>
                <ul>
                    <li><Link to="/dashboard" onClick={toggleSidebar}>Dashboard</Link></li>
                    <li><Link to="/exams" onClick={toggleSidebar}>Exams</Link></li>
                    <li><Link to="/results" onClick={toggleSidebar}>Results</Link></li>
                    <li><Link to="/settings" onClick={toggleSidebar}>Settings</Link></li>
                </ul>
            </div>

            {/* Overlay */}
            {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
        </>
    );
};

export default Sidebar;
