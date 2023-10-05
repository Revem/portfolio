import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

export default function Main({ lang }) {
  return (
    <main id="Home" className="flex flex-col justify-center items-center p-5 md:p-10 lg:p-24 h-screen">

      <div className="title text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-victorViolet "><strong>{lang === 'pt-br' ? 'Olá,' : 'Hello,'}</strong></h1>
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-white ">
          {lang === 'pt-br' ? 'Meu nome é' : 'My name is'}  <span className="text-victorViolet transition-all duration-500 hover:drop-shadow-glow"><strong>Victor</strong></span>
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-center text-white ">
          {lang === 'pt-br' ? 'e eu sou um' : 'and I am a'}
        </h1>
        <div className="flex text-center justify-center mb-8">
          <div className="text-xl md:text-4xl lg:text-6xl text-victorViolet">
            <strong>
              <Typewriter
                options={{
                  strings: ['{back-end}', '{front-end}', '{fullstack}'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </strong>
          </div>
          <span className="text-2xl md:text-4xl lg:text-6xl text-white"> developer</span>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8">
        <a href="http://github.com/revem" className="group relative">
          <button
            className="border-victorViolet border-solid border-2 rounded-2xl p-2 md:p-4 lg:p-6 text-xl md:text-2xl lg:text-3xl transition-all duration-500 hover:bg-victorViolet hover:rounded-tl-3xl  drop-shadow-glow overflow-hidden"
          >
            <div className="tooltip duration-500 text-black text-center text-xs md:text-sm lg:text-base absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 bg-victorViolet hover:opacity-100 transition-opacity">
              Github
            </div>
            <FaGithubAlt />
          </button>
        </a>
        <a href="https://linkedin.com/in/victorpicon" className="group relative">
          <button
            className="border-victorViolet border-solid border-2 rounded-2xl p-2 md:p-4 lg:p-6 text-xl md:text-2xl lg:text-3xl transition-all duration-500 hover:bg-victorViolet hover:rounded-tl-3xl  drop-shadow-glow overflow-hidden"
          >
            <div className="tooltip duration-500 text-black text-center text-xs md:text-sm lg:text-base absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 bg-victorViolet hover:opacity-100 transition-opacity">
              LinkedIn
            </div>
            <FaLinkedin />
          </button>
        </a>
      </div>


    </main>
  );
}
