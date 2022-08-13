import React from 'react'
import yo from "../assets/yo.png"
import { MdKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm Franco Meinardo a Full Stack Developer</h2>
                {/* <p className='text-gray-500 py-4 max-w-md'>Hola, soy desarrollador web Fullstack. Empecé a aprender las tecnologías de la web a fines de 2021, y desde ese momento no he parado de adquirir nuevos conocimientos, con motivación y ganas de seguir mejorando.</p> */}

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={yo} alt="my picture" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home