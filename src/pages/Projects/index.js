'use client'
import Card from '@/components/Card';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Projects() {
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
      id="Projetos"
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className={`p-24 items-center`}
    >
      <div className='flex items-center'>
        <div className="w-0.5 h-12 bg-victorViolet mr-4"></div>
        <strong className="text-6xl">Projetos</strong>
      </div>
      <div className='flex justify-around mt-24 grid grid-cols-1 gap-10 md:grid-cols-2 sm:grid-cols-1'>
        <Card node javascript title="Accounts" description="Sistema de simulação de contas bancarias diretamente no terminal. Criado com NodeJS." gitUrl="https://github.com/Revem/Accounts" printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152371766556115004/image.png?width=1210&height=478" />
        <Card node javascript html css title="Thoughts" description="Website para registrar pensamentos e torna-los públicos para os outros utilizadores. Criado com NodeJS, Express e Handlebars." printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152781438991732736/image.png?width=960&height=348" gitUrl="https://github.com/Revem/Thoughts" />
        <Card javascript react css html title="Amanhã vai ser Pior" description="Landing Page para o livro Amanhã vai ser Pior dos Galãs Feios. Criado utilizando ReactJS." gitUrl="https://github.com/Revem/LandingPage-Amanha-Vai-ser-Pior" printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152773244600975481/image.png?width=960&height=358" liveUrl="http://landing-page-amanha-vai-ser-pior.vercel.app" />
        <Card javascript react css html title="Pokedex" description="Pokedex criada utilizando NextJS como treino para consumo de API's" gitUrl="https://github.com/Revem/pokedex/tree/main" printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152792901902938232/image.png?width=960&height=323" liveUrl="http://pokedex-five-sand.vercel.app" />
      </div>
    </motion.main>
  );
}
