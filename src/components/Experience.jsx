import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import postgres from "../assets/postgres.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import angular from "../assets/angular.png";
import typescript from "../assets/ts.png";
// import bootstrap from "../assets/bootstrap.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-orange-600",
    },
    {
      id: 5,
      src: angular,
      title: "Angular",
      style: "shadow-orange-600",
    },
    {
      id: 6,
      src: typescript,
      title: "Typescript",
      style: "shadow-red-600",
    },
    {
      id: 6,
      src: mysql,
      title: "MySQL",
      style: "shadow-red-600",
    },
    {
      id: 7,
      src: postgres,
      title: "Postgres",
      style: "shadow-red-600",
    },
    {
      id: 8,
      src: nodejs,
      title: "Nodejs",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: git,
      title: "Git",
      style: "shadow-blue-600",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-purple-500",
    },
    // {
    //   id: 12,
    //   src: webpack,
    //   title: "Webpack",
    //   style: "shadow-yellow-500",
    // },
    // {
    //   id: 13,
    //   src: bootstrap,
    //   title: "Bootstrap",
    //   style: "shadow-red-500",
    // },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <br></br>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 pt-2 inline  mt-30">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Experience