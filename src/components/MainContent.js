import React from "react";
import { FaBook, FaClipboardCheck, FaBullhorn } from "react-icons/fa";
import { Sidebar } from "./Sidebar"; // Assuming you have a Sidebar component

const MainContent = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            {/* <Sidebar /> */}

            {/* Main Content */}
            <div className="flex-1 p-6 bg-white shadow-md rounded-xl m-6">
                {/* Header Section */}
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Dashboard</h1>

                {/* Stats Cards */}
                <div className="flex flex-row space-x-6">
                    <Card icon={<FaBook className="text-blue-500" />} title="Exams" count={1} description="Total number of exams" />
                    <Card icon={<FaClipboardCheck className="text-green-500" />} title="Attempts" count={1} description="Total number of attempted exams" />
                    <Card icon={<FaBullhorn className="text-red-500" />} title="Announcements" count={1} description="Total number of messages received" />
                </div>

                {/* General Instructions */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-gray-300">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">:: General Instructions ::</h2>
                    <ul className="list-disc pl-6 space-y-3 text-gray-600">
                        <li>You are only allowed to start the test at the prescribed time.</li>
                        <li>The timer will start from the current time and will not pause.</li>
                        <li>You can see the history of tests taken and scores in the Results section.</li>
                        <li>To start the test, click on the 'Start' button in the Exam section.</li>
                        <li>Once the test is started, the timer will run irrespective of login status.</li>
                        <li>To mark an answer, select an option. The selected button will turn blue.</li>
                        <li>To reset the form, click the reset button at the bottom.</li>
                        <li>Tests must be completed within the allotted time, or they will be marked zero.</li>
                        <li>Marks will be calculated and displayed instantly in the Results section.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Card = ({ icon, title, count, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6 border border-gray-200">
            <div className="text-5xl">{icon}</div>
            <div>
                <h3 className="text-2xl font-semibold text-gray-800">{count}</h3>
                <p className="text-gray-600 text-md">{description}</p>
            </div>
        </div>
    );
};

export default MainContent;