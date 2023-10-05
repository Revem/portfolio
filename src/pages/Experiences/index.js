import ExperienceCard from '@/components/ExperienceCards';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../app/customCarousel.css';

export default function Experiences({ lang }) {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' }); // Defina a largura máxima para o tamanho da tela que você deseja

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
      className={`p-4 md:p-24 flex flex-col items-center`}
    >
      <div className='flex flex-row items-center'>
        <div className="hidden md:flex w-1 h-12 bg-victorViolet mr-3"></div>
        {lang == 'pt-br' ? <strong className="text-4xl md:text-6xl">Experiências</strong> : <strong className="text-4xl md:text-6xl">Experience</strong>}
      </div>
      <div className='w-full max-w-screen-lg mt-8'>
        {isSmallScreen ? (
          <div className='w-72 p-7'>
            <ExperienceCard lang={lang} cargo="Desenvolvedor Fullstack" enCargo="Fullstack Developer" empresa="Keeper" descricao="Desenvolvimento de novas funcionalidades utilizando Angular e Python(Flask) de acordo com a demanda do time. Desenvolvimento da aplicação mobile em React Native" enDescricao="Development of new features using Angular and Python (Flask) according to the team's demand. Development of the mobile application in React Native." />
            <div className="mt-4 border-t border-victorViolet"></div> {/* Separador entre experiências */}
            <ExperienceCard lang={lang} cargo="Desenvolvedor Fullstack" enCargo='Fullstack Developer' empresa="Delta Investor" descricao="Contribui para o aplicativo (Android e IOS) em React Native. Contribui para o API Backend em Python. Ouvi as necessidades de outros setores e criei funcionalidades no aplicativo sob medida para apoiar a empresa como um todo." enDescricao="Contributed to the React Native mobile application (Android and iOS). Contributed to the Python API Backend. Listened to the needs of other departments and created customized app features to support the company as a whole." />
            <div className="mt-4 border-t border-victorViolet"></div> {/* Separador entre experiências */}
            <ExperienceCard lang={lang} cargo="Desenvolvedor Fullstack - Estágio" enCargo="Fullstack Developer - Trainee" empresa="Directa" descricao="Desenvolvimento Front-end utilizando ReactJS e Redux. Desenvolvimento Back-end com NodeJS. Git/Github. Contato com Heroku. Contato com banco de dados MySQL. Utilização de metodologias ágeis e kanban/Trello." enDescricao="Front-end development using ReactJS and Redux. Back-end development with NodeJS. Git/Github. Experience with Heroku and MySQL databases. Utilization of Agile methodologies and Kanban/Trello." />
            <div className="mt-4 border-t border-victorViolet"></div> {/* Separador entre experiências */}
            <ExperienceCard lang={lang} cargo="Ensino Superior" enCargo="College" empresa="Universidade Estácio" descricao="Programa remoto focado em construir uma base forte em desenvolvimento de software. Apliquei os conhecimentos teóricos obtidos na graduação em projetos pessoais e freelancers." enDescricao="Remote program focused on building a strong foundation in software development. Applied the theoretical knowledge acquired during graduation to personal projects and freelance work." />
            <div className="mt-4 border-t border-victorViolet"></div> {/* Separador entre experiências */}
            <ExperienceCard lang={lang} cargo="Ensino Médio integrado ao técnico em Informática" enCargo="Tech High School" empresa="Etec Itu" descricao="Desenvolvi skills de programação e ganhei experiência prática em diversas linguagens e tecnologias. Criei bancos de dados relacionais usando MySQL. Participei de diversos eventos, campeonatos e hackhatons organizados pelo Grupo de Robótica do Centro Paula Souza." enDescricao="Developed programming skills and gained practical experience in various languages and technologies. Created relational databases using MySQL. Participated in various events, competitions, and hackathons organized by the Robotics Group of Centro Paula Souza." />
          </div>
        ) : (
          <div className='border-2 p-3 md:p-5 rounded-md hover:border-white border-victorViolet transition-all duration-500'>
            <Carousel showArrows={false} className="max-w-md md:max-w-xl" infiniteLoop showIndicators={true} showStatus={false} autoPlay emulateTouch indicatorContainerClassName="indicadores">
              <ExperienceCard lang={lang} cargo="Desenvolvedor Fullstack" enCargo="Fullstack Developer" empresa="Keeper" descricao="Desenvolvimento de novas funcionalidades utilizando Angular e Python(Flask) de acordo com a demanda do time. Desenvolvimento da aplicação mobile em React Native" enDescricao="Development of new features using Angular and Python (Flask) according to the team's demand. Development of the mobile application in React Native." />
              <ExperienceCard lang={lang} cargo="Desenvolvedor Fullstack" enCargo='Fullstack Developer' empresa="Delta Investor" descricao="Contribui para o aplicativo (Android e IOS) em React Native. Contribui para o API Backend em Python. Ouvi as necessidades de outros setores e criei funcionalidades no aplicativo sob medida para apoiar a empresa como um todo." enDescricao="Contributed to the React Native mobile application (Android and iOS). Contributed to the Python API Backend. Listened to the needs of other departments and created customized app features to support the company as a whole." />
              <ExperienceCard lang={lang} cargo="Desenvolvedor Fullstack - Estágio" enCargo="Fullstack Developer - Trainee" empresa="Directa" descricao="Desenvolvimento Front-end utilizando ReactJS e Redux. Desenvolvimento Back-end com NodeJS. Git/Github. Contato com Heroku. Contato com banco de dados MySQL. Utilização de metodologias ágeis e kanban/Trello." enDescricao="Front-end development using ReactJS and Redux. Back-end development with NodeJS. Git/Github. Experience with Heroku and MySQL databases. Utilization of Agile methodologies and Kanban/Trello." />
              <ExperienceCard lang={lang} cargo="Ensino Superior" enCargo="College" empresa="Universidade Estácio" descricao="Programa remoto focado em construir uma base forte em desenvolvimento de software. Apliquei os conhecimentos teóricos obtidos na graduação em projetos pessoais e freelancers." enDescricao="Remote program focused on building a strong foundation in software development. Applied the theoretical knowledge acquired during graduation to personal projects and freelance work." />
              <ExperienceCard lang={lang} cargo="Ensino Médio integrado ao técnico em Informática" enCargo="Tech High School" empresa="Etec Itu" descricao="Desenvolvi skills de programação e ganhei experiência prática em diversas linguagens e tecnologias. Criei bancos de dados relacionais usando MySQL. Participei de diversos eventos, campeonatos e hackhatons organizados pelo Grupo de Robótica do Centro Paula Souza." enDescricao="Developed programming skills and gained practical experience in various languages and technologies. Created relational databases using MySQL. Participated in various events, competitions, and hackathons organized by the Robotics Group of Centro Paula Souza." />
            </Carousel>
          </div>
        )}
      </div>
      <div className="mt-8"></div>
    </motion.main>
  );
}
