'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiLogoAws, BiLogoDjango, BiLogoJavascript, BiLogoMongodb, BiLogoPostgresql, BiLogoSpringBoot, BiLogoTypescript } from 'react-icons/bi';
import { DiMysql } from 'react-icons/di';
import { FaAngular, FaCss3, FaDocker, FaFlask, FaGithub, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';

export default function Tecnologies({ lang }) {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        if (!isVisible) {
          setIsVisible(true);
          controls.start({ opacity: 1, x: 0 });
        }
      } else {
        if (isVisible) {
          setIsVisible(false);
          controls.start({ opacity: 0, x: -50 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, isVisible]);

  const isSmallScreen = window.innerWidth <= 640; // Defina a largura máxima para telas pequenas aqui
  const iconSize = isSmallScreen ? 'text-4xl' : 'text-7xl'; // Tamanho menor para telas pequenas

  return (
    <motion.main
      id="Tecnologias"
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className={`p-6 md:p-24 flex flex-col`}
    >
      <div className='flex items-center justify-center'>
        <div className="w-0.5 hidden md:flex h-16 bg-victorViolet md:mr-4"></div>
        {lang == 'pt-br' ? (<strong className="text-4xl md:text-8xl">Tecnologias</strong>) : (<strong className="text-6xl">Skills</strong>)}
      </div>
      <div className='md:p-10 grid md:grid-cols-3 md:gap-5 lg:gap-24 p-6 grid-cols-1 gap-6'>
        <div className={`md:col-span-1 p-6 flex flex-col border-solid border-victorViolet hover:border-white border-2 rounded-tl-3xl rounded-md items-center justify-center hover:-translate-y-6 transition-all text-center ${isSmallScreen ? 'space-y-2' : ''}`}>
          {lang == 'pt-br' ? (<strong className='p-3 text-xl'>Linguagens</strong>) : (<strong className='p-3 text-xl'>Languages</strong>)}
          <div className={`grid grid-cols-3 gap-5 p-5 ${isSmallScreen ? 'gap-y-2' : ''}`}>
            <BiLogoJavascript className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <BiLogoTypescript className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <FaJava className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <FaPython className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <FaHtml5 className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <FaCss3 className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
          </div>
        </div>
        <div className={`md:col-span-1 p-6 flex flex-col border-solid border-victorViolet hover:border-white border-2 rounded-tl-3xl rounded-md items-center justify-center hover:-translate-y-6 transition-all text-center ${isSmallScreen ? 'space-y-2' : ''}`}>
          {lang == 'pt-br' ? (<strong className='p-3 text-xl'>Frameworks e Bibliotecas</strong>) : (<strong className='p-3 text-xl'>Frameworks and Libraries</strong>)}
          <div className={`grid grid-cols-3 gap-5 p-5 ${isSmallScreen ? 'gap-y-2' : ''}`}>
            <FaReact className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <FaNodeJs className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <FaAngular className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <BiLogoSpringBoot className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <FaFlask className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <BiLogoDjango className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
          </div>
        </div>
        <div className={`md:col-span-1 p-6 flex flex-col border-solid border-victorViolet hover:border-white border-2 rounded-tl-3xl rounded-md items-center justify-center hover:-translate-y-6 transition-all text-center ${isSmallScreen ? 'space-y-2' : ''}`}>
          {lang == 'pt-br' ? (<strong className='p-3 text-xl'>Banco de Dados e outros</strong>) : (<strong className='p-3 text-xl'>Database and others</strong>)}
          <div className={`grid grid-cols-3 gap-5 p-5 ${isSmallScreen ? 'gap-y-2' : ''}`}>
            <BiLogoMongodb className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <BiLogoPostgresql className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <DiMysql className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <BiLogoAws className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <FaDocker className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
            <FaGithub className={`${iconSize} text-victorViolet hover:text-white transition-all duration-500`} />
          </div>
        </div>
      </div>
    </motion.main>
  );
}
