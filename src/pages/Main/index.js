'use client'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

export default function Main() {
  return (
    <main id="Home" className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="title text-6xl w-full p-5 text-center">
        <h1 className='text-8xl text-victorViolet mr-72'><strong>Olá,</strong></h1>
        <h1>Meu nome é <span className='text-victorViolet transition-all duration-500 hover:drop-shadow-glow'><strong>Victor</strong></span></h1>
        <h1 className='text-center'>e eu sou um
          <span className='flex text-center justify-center'>
            <div className='text-victorViolet'>
              <strong>
                <Typewriter
                  options={{
                    strings: ['{back-end}', '{front-end}', '{fullstack}'],
                    autoStart: true,
                    loop: true,
                  }}
                /></strong>
            </div>
            developer
          </span>

        </h1>
      </div>
      <div className="">
        <a className='p-5 group' href="http://github.com/revem" ><button className='border-victorViolet border-solid border-2 rounded-2xl p-4 text-xl transition-all duration-500 hover:bg-victorViolet hover:rounded-tl-3xl  hover:text-black drop-shadow-glow'><FaGithubAlt /> </button>
          <div className="mb-5 transition-all duration-500 opacity-0 border-2 border-victorViolet text-white text-center text-xs rounded-lg py-2 absolute z-50 group-hover:opacity-100 bottom-full -left-1/2 ml-16 px-3 pointer-events-none">
            Github
          </div></a>
        <a className='p-5 group' href="https://linkedin.com/in/victorpicon"><button className='border-victorViolet border-solid border-2 rounded-2xl p-4 text-xl transition-all duration-500 hover:bg-victorViolet hover:rounded-tl-3xl hover:text-black drop-shadow-glow'><FaLinkedin /></button>
          <div className="mb-5 transition-all duration-500 opacity-0 border-2 border-victorViolet text-white text-center text-xs rounded-lg py-2 absolute z-50 group-hover:opacity-100 bottom-full -left-1/2 ml-16 px-3 pointer-events-none">
            LinkedIn
          </div>
        </a>
      </div>
      <div></div>
    </main>
  )
}

