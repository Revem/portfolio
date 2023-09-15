'use client'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

export default function Main() {
  return (
    <main id="Home" className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="title text-6xl w-full p-5 text-center">
        <h1 className='text-8xl text-victorViolet mr-72'><strong>Olá,</strong></h1>
        <h1>Meu nome é <span className='text-victorViolet transition-all duration-500 hover:drop-shadow-glow'>Victor</span></h1>
        <h1 className='text-center'>e eu sou um
          <span className='flex text-center justify-center'>
            <div className='text-victorViolet'>
              <Typewriter
                options={{
                  strings: ['{back-end}', '{front-end}', '{fullstack}'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            developer
          </span>

        </h1>
      </div>
      <div className="">
        <a className='p-5' href="http://github.com/revem"><button className='border-victorViolet border-solid border-2 rounded-2xl p-4 text-xl transition-all duration-500 hover:bg-victorViolet hover:rounded-tl-3xl hover:text-black drop-shadow-glow'><FaGithubAlt /></button></a>
        <a className='p-5' href="https://linkedin.com/in/victorpicon"><button className='border-victorViolet border-solid border-2 rounded-2xl p-4 text-xl transition-all duration-500 hover:bg-victorViolet hover:rounded-tl-3xl hover:text-black drop-shadow-glow'><FaLinkedin /></button></a>
      </div>
      <div></div>
    </main>
  )
}

