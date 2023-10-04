'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function About({ lang }) {
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

  return (
    <motion.main
      id="Sobre"
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className={`p-24 flex items-center`}
    >
      {lang == 'pt-br' ? (<>
        <div className="w-1 h-12 bg-victorViolet mr-4"></div>
        <strong className="text-6xl">Sobre</strong>
        <span className='text-9xl text-victorViolet'>{'{'}</span>
        <h1 className='text-3xl'>Desenvolvedor com experiência em <strong className='text-victorViolet'> Front-end</strong>, <strong className='text-victorViolet'>Back-end</strong> e <strong className='text-victorViolet'>Mobile</strong>. Experiências prévias em
          consultoria. Alta capacidade de resolução de problemas, excelente em trabalho em equipe e facilidade em
          aprender coisas novas. <strong className='text-victorViolet'>Nivel C2 </strong>de <strong className='text-victorViolet'>inglês</strong>.
        </h1>
      </>) : (<>
        <div className="w-1 h-12 bg-victorViolet mr-4"></div>
        <strong className="text-6xl">About</strong>
        <span className='text-9xl text-victorViolet'>{'{'}</span>
        <h1 className='text-3xl'>Developer with experience in <strong className='text-victorViolet'>Front-end</strong>, <strong className='text-victorViolet'>Back-end</strong>, and <strong className='text-victorViolet'>Mobile</strong>. Previous experience in consulting. High problem-solving skills, excellent teamwork, and ease in learning new things. <strong className='text-victorViolet'>C2 level</strong> in <strong className='text-victorViolet'>English</strong>.
        </h1>
      </>)}

    </motion.main>
  );
}
