import Card from '@/components/Card';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Projects({ lang }) {
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
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        id='Projetos'
        animate={controls}
        transition={{ duration: 0.7 }}
        className="p-4 md:p-24"
      >
        <div className="flex items-center justify-center">
          <div className="w-0.5 hidden md:flex h-16 bg-victorViolet mr-4"></div>
          <strong className="text-5xl md:text-8xl">
            {lang === 'pt-br' ? 'Projetos' : 'Projects'}
          </strong>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <Card lang={lang} react tailwind css html javascript
            title="Meu Portfólio" enTitle="My Portfolio"
            description="Esse portfólio que você está visualizando, o mesmo é utilizado para demonstrar meus projetos mais recentes, além de algumas informações sobre mim!"
            enDescription="This portfolio you are viewing is used to showcase my most recent projects, along with some information about me!"
            gitUrl="https://github.com/Revem/portfolio"
            printUrl="https://media.discordapp.net/attachments/1152003718762463263/1156364749001457704/image.png?ex=6514b418&is=65136298&hm=c00336c8a965b2d3ab6a6fe3fb0ffcc7ae2605427855f6afba16af325fd148c6&=&width=960&height=355"
            liveUrl="http://victor-picon.vercel.app" />
          <Card lang={lang} react tailwind css html javascript
            title="ModelViewer Frontend" enTitle="ModelViewer Frontend"
            description="Parte frontend do projeto de gerenciamento de Arquivos GLB com Integração ao Model Viewer."
            enDescription="Frontend part of the GLB File Management project with integration to the Model Viewer."
            gitUrl="https://github.com/Revem/frontend-model-viewer"
            printUrl="https://media.discordapp.net/attachments/270850384573104129/1155317238090453063/3904528e-cec7-49a1-84a0-32887742c913.png?ex=65143046&is=6512dec6&hm=13c03c2335da60b813ed97bd88a683172eb56f6d0b3879e768663043b9800033&=&width=960&height=478" />
          <Card lang={lang} node javascript
            title="ModelViewer Backend" enTitle="ModelViewer Backend"
            description="Parte backend do projeto de gerenciamento de Arquivos GLB com Integração ao Model Viewer."
            enDescription="Backend part of the GLB File Management project with integration to the Model Viewer."
            gitUrl="https://github.com/Revem/backend-model-viewer"
            printUrl="https://media.discordapp.net/attachments/270850384573104129/1155317236077182986/6eedaa7d-6d3d-4de7-9448-96426f1e2577.png?ex=65143045&is=6512dec5&hm=965a9593152a1bfc955309ae79e63098ad0dff6ef1bdef5387b780d4b11b7026&=&width=960&height=475" />
          <Card lang={lang} node javascript
            title="Accounts" enTitle="Accounts"
            description="Sistema de simulação de contas bancarias diretamente no terminal. Criado com NodeJS."
            enDescription="Terminal-based bank account simulation system. Created with NodeJS."
            gitUrl="https://github.com/Revem/Accounts"
            printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152371766556115004/image.png?width=1210&height=478" />
          <Card lang={lang} node javascript html css
            title="Thoughts" enTitle="Thoughts"
            description="Website para registrar pensamentos e torna-los públicos para os outros utilizadores. Criado com NodeJS, Express e Handlebars."
            enDescription="Website for recording thoughts and making them public to other users. Created with NodeJS, Express, and Handlebars."
            printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152781438991732736/image.png?width=960&height=348"
            gitUrl="https://github.com/Revem/Thoughts" />
          <Card lang={lang} javascript react css html
            title="Amanhã vai ser Pior" enTitle="Tomorrow will be Worse"
            description="Landing Page para o livro Amanhã vai ser Pior dos Galãs Feios. Criado utilizando ReactJS."
            enDescription='Landing Page for the book "Amanhã vai ser Pior dos Galãs Feios." Created using ReactJS.'
            gitUrl="https://github.com/Revem/LandingPage-Amanha-Vai-ser-Pior"
            printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152773244600975481/image.png?width=960&height=358"
            liveUrl="http://landing-page-amanha-vai-ser-pior.vercel.app" />
          <Card lang={lang} javascript react css html
            title="Pokedex" enTitle="Pokedex"
            description="Pokedex criada utilizando NextJS como treino para consumo de API's"
            enDescription="Pokedex created using NextJS as practice for consuming APIs."
            gitUrl="https://github.com/Revem/pokedex/tree/main"
            printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152792901902938232/image.png?width=960&height=323"
            liveUrl="http://pokedex-five-sand.vercel.app" />
        </div>
      </motion.div>
    </div>
  );
}
