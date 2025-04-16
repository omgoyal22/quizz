import React from "react";
import { FaBook, FaClipboardCheck, FaBullhorn } from "react-icons/fa";

const MainContent = () => {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
            {/* Main Content */}
            <div className="flex-1 p-8 m-6 bg-white shadow-2xl rounded-3xl max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    📚 Student Dashboard
                </h1>

                {/* Stats Section */}
                <div className="flex flex-row gap-6 justify-center mb-10 overflow-x-auto whitespace-nowrap">
                    <Card
                        icon={<FaBook />}
                        count={1}
                        description="Total number of exams"
                        gradient="from-blue-400 to-blue-600"
                    />
                    <Card
                        icon={<FaClipboardCheck />}
                        count={1}
                        description="Total number of attempted exams"
                        gradient="from-green-400 to-green-600"
                    />
                    <Card
                        icon={<FaBullhorn />}
                        count={1}
                        description="Total number of messages received"
                        gradient="from-red-400 to-red-600"
                    />
                </div>

                {/* Instructions */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">:: General Instructions ::</h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 text-[1rem] leading-relaxed">
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

const Card = ({ icon, count, description, gradient }) => {
    return (
        <div className="bg-white w-80 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center space-x-5">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${gradient} flex items-center justify-center shadow-md`}>
                <div className="text-white text-2xl">
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-extrabold text-gray-800">{count}</h3>
                <p className="text-gray-500 text-sm font-medium">{description}</p>
            </div>
        </div>
    );
};

export default MainContent;
