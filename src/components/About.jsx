import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full py-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Hi, I'm Franco — a QA Automation Engineer focused on building reliable and scalable testing solutions.
        </p>

        <p className="text-xl mt-5">
          I have experience working with automated and exploratory testing using tools like Cypress and JavaScript, helping teams improve software quality and detect issues early in the development process.
        </p>
        <p className="text-xl mt-5">
          I enjoy working in agile environments, collaborating closely with developers and product teams, and continuously learning new technologies and testing strategies.
        </p>

        <p className="text-xl mt-5">
          Currently, I’m focused on improving my skills in test automation, API testing, and modern development workflows.
        </p>
      </div>
    </div>
  );
};

export default About;
