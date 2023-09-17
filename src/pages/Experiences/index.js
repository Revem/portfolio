'use client'
import ExperienceCard from '@/components/ExperienceCards';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../app/customCarousel.css';

export default function Experiences() {
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
      id="Experiencias"
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className={`p-24 flex flex-col`}
    >
      <div className='flex items-center'>
        <div className="w-1 h-12 bg-victorViolet mr-4"></div>
        <strong className="text-6xl">Experiencias</strong>
      </div>
      <div className=''>
        <div className='flex flex-col items-start mt-12 ml-8 max-w-xl'>
          <div className='border-2 pt-5 px-5 rounded-md rounded-tl-2xl hover:border-white border-victorViolet transition-all duration-500'>
            <Carousel showArrows={false} className=" max-w-md" infiniteLoop showIndicators={true} showStatus={false} autoPlay emulateTouch indicatorContainerClassName="indicadores">
              <ExperienceCard cargo="Desenvolvedor Fullstack" empresa="Keeper" descricao="
              Desenvolvimento de novas funcionalidades utilizando Angular e Python(Flask) de acordo com a demanda do time.
Desenvolvimento da aplicação mobile em React Native" />
              <ExperienceCard cargo="Desenvolvedor Fullstack" empresa="Delta Investor" descricao="Contribui para o aplicativo (Android e IOS) em React Native. 
Contribui para o API Backend em Python.
Ouvi as necessidades de outros setores e criei funcionalidades no aplicativo sob medida para apoiar a empresa como um todo." />
              <ExperienceCard cargo="Desenvolvedor Fullstack - Estágio" empresa="Directa" descricao="Desenvolvimento Front-end utilizando ReactJS e Redux
Desenvolvimento Back-end com NodeJS
Git/Github
Contato com Heroku Contato com banco de dados MySQL
Utilização de metodologias ágeis e kanban/Trello" />
              <ExperienceCard cargo="Ensino Superior" empresa="Universidade Estácio" descricao="Programa remoto focado em construir uma base forte em desenvolvimento de software.
Apliquei os conhecimentos teóricos obtidos na graduação em projetos pessoais e freelancers." />
              <ExperienceCard cargo="Ensino Médio integrado ao técnico em Informática" empresa="Etec Itu" descricao="Desenvolvi skills de programação e ganhei experiência prática em diversas linguagens e tecnologias.
Criei bancos de dados relacionais usando MySQL.
Participei de diversos eventos, campeonatos e hackhatons organizados pelo Grupo de Robótica do Centro Paula Souza." />

            </Carousel>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
