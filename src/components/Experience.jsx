import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full py-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-cyan-500 mb-2">Silstech</h3>
            <p className="text-xl font-semibold text-gray-300 mb-4">QA Automation Engineer</p>
            
            <div className="flex flex-col sm:flex-row sm:gap-8 mb-6 text-lg text-gray-400">
              <div className="flex items-center gap-2">
                <span>📍 Remote</span>
              </div>
              <div className="hidden sm:block text-gray-600">|</div>
              <div className="flex items-center gap-2">
                <span>📅 2022 — February <span className="text-gray-600"> | </span> 2024 - March</span>
              </div>
            </div>
            
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Developed and maintained end-to-end automated tests using Cypress and JavaScript</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Performed exploratory, functional, and regression testing for web applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Collaborated with developers and agile teams to improve software quality and release stability</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Identified bugs early in the development cycle, helping reduce production issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Contributed to improving QA workflows and testing processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Worked closely with cross-functional teams in agile environments</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-cyan-500 mb-2">Freelance Web Developer</h3>
            
            <div className="flex flex-col sm:flex-row sm:gap-8 mb-6 text-lg text-gray-400">
              <div className="flex items-center gap-2">
                <span>📍 Remote</span>
              </div>
              <div className="hidden sm:block text-gray-600">|</div>
              <div className="flex items-center gap-2">
                <span>📅 2022 — Present</span>
              </div>
            </div>
            
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Developed responsive web applications for independent clients and personal projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Built fullstack solutions using JavaScript, Node.js, and modern frontend technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Implemented authentication, CRUD operations, APIs, and responsive interfaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Collaborated directly with clients to understand requirements and deliver functional solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">✓</span>
                <span>Focused on clean UI, usability, and scalable development practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
