import React from 'react'
import countries from "../assets/portfolio/countries.png";
import wallet from "../assets/portfolio/wallet.png";
import calculadora from "../assets/portfolio/calculadora.jpg";
import admindashboard from "../assets/portfolio/admindashboard.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: countries,
      // demo: "https://countris-app-pi.vercel.app",
      demo: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7016418389904535552/",
      code: "https://github.com/francomei/PI-Countries"
    },
    {
      id: 2,
      src: wallet,
      // demo: "https://henry-pf-client.vercel.app",
      demo: "https://drive.google.com/file/d/1wwtzpL8ZTQVvH8Jf7LNGq7oM91mQl9ic/view?usp=sharing",
      code: "https://github.com/francomei/henry-pf-client"
    },
    {
      id: 3,
      src: calculadora,
      demo: "https://calculadora-n8fszj8qq-francomei.vercel.app",
      code: "https://github.com/francomei/Calculadora"
    },
    {
      id: 3,
      src: admindashboard,
      demo: "https://admin-dashboard-theta-sepia.vercel.app",
      code: "https://github.com/francomei/Admin-dashboard"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          
          <br />
          <br />

          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio