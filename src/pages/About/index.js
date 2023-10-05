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
      className={`p-4 md:p-24 flex flex-col md:flex-row items-center ${lang === 'pt-br' ? 'text-center' : 'text-center md:text-left'
        }`}
    >
      <div className="hidden md:flex w-1 h-16 bg-victorViolet mb-0 md:mr-4"></div>
      <strong className="text-6xl md:text-8xl">
        {lang === 'pt-br' ? 'Sobre' : 'About'}
      </strong>
      <span className='hidden md:flex text-9xl text-victorViolet'>{'{'}</span>
      <h1 className='text-2xl md:text-3xl'>
        {lang === 'pt-br' ? (
          <>
            Desenvolvedor com experiência em{' '}
            <strong className='text-victorViolet'>Front-end</strong>,{' '}
            <strong className='text-victorViolet'>Back-end</strong> e{' '}
            <strong className='text-victorViolet'>Mobile</strong>. Experiências prévias em
            consultoria. Alta capacidade de resolução de problemas, excelente em trabalho em equipe e facilidade em
            aprender coisas novas.{' '}
            <strong className='text-victorViolet'>Nível C2 </strong>de{' '}
            <strong className='text-victorViolet'>inglês</strong>.
          </>
        ) : (
          <>
            Developer with experience in{' '}
            <strong className='text-victorViolet'>Front-end</strong>,{' '}
            <strong className='text-victorViolet'>Back-end</strong>, and{' '}
            <strong className='text-victorViolet'>Mobile</strong>. Previous experience in consulting. High problem-solving skills, excellent teamwork, and ease in learning new things.{' '}
            <strong className='text-victorViolet'>C2 level</strong> in{' '}
            <strong className='text-victorViolet'>English</strong>.
          </>
        )}
      </h1>
    </motion.main>
  );
}
