import React from 'react'
import yo from "../assets/yo.png"
import { MdKeyboardArrowRight} from "react-icons/md"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-12 md:px-8'>
            <div className='flex flex-col justify-center h-full md:flex-1 mb-8 md:mb-0'>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">Franco Meinardo</h2>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium mb-8">QA Automation Engineer & Fullstack Developer</p>

                <div className='mt-4'>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300' >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='md:flex-1 md:px-4'>
                <img src={yo} alt="my profile" className='rounded-2xl mx-auto w-1/2 md:w-2/3 drop-shadow-lg' />
            </div>
        </div>
    </div>
  )
}

export default Home