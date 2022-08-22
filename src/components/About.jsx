import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          👋 Hi, my name is Franco, I'm 19 years old, I live in Córdoba,
          Argentina.
        </p>

        <p className="text-xl mt-5">
          💻 For more than 1 year I discovered the world of programming for
          which I invested time studying as a self-taught, developing different
          skills such as logic and problem solving. Currently I finished an
          intensive course of more than 1000 hours in which I learned to work in
          a team and carry out different projects with the latest technologies.
        </p>
        <p className="text-xl mt-5">
          👨‍💻 I am characterized by being organized, self-taught, responsible,
          strict with myself and always trying to learn about new technologies,
          since I am passionate about everything related to development. I love
          challenges and having goals to be able to perform as a developer. When
          there is something I don't know, I investigate until I find the
          solution. I consider myself a good colleague and supportive. I love
          working in a team and I always try to help others.
        </p>

        <p className="text-xl mt-5">
          🌎 I would like to work in an environment where people are committed,
          where I can continue to grow and where I am given the right tools to
          project myself as a professional and grow as a person.
        </p>

        <p className="text-xl mt-5 mb-20">
          🚀 My goal is to become a Senior Developer to be able to pass on my
          knowledge and experience to others, which I am passionate about.
        </p>
      </div>
    </div>
  );
};

export default About;
