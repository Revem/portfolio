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
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        id='Projetos'
        animate={controls}
        transition={{ duration: 0.7 }}
        className="p-24 items-center"
      >
        <div className="flex items-center">
          <div className="w-0.5 h-12 bg-victorViolet mr-4"></div>
          <strong className="text-6xl">Projetos</strong>
        </div>
        <div className="flex justify-around mt-24 grid grid-cols-1 gap-10 md:grid-cols-2 sm:grid-cols-1">
          <Card react tailwind css html javascript title="Meu Portfólio" description="Esse portfólio que você está visualizando!" gitUrl="https://github.com/Revem/portfolio" printUrl="https://media.discordapp.net/attachments/1152003718762463263/1156364749001457704/image.png?ex=6514b418&is=65136298&hm=c00336c8a965b2d3ab6a6fe3fb0ffcc7ae2605427855f6afba16af325fd148c6&=&width=960&height=355" liveUrl="http://victor-picon.vercel.app" />
          <Card react tailwind css html javascript title="ModelViewer Frontend" description="Parte frontend do projeto de gerenciamento de Arquivos GLB com Integração ao Model Viewer." gitUrl="https://github.com/Revem/frontend-model-viewer" printUrl="https://media.discordapp.net/attachments/270850384573104129/1155317238090453063/3904528e-cec7-49a1-84a0-32887742c913.png?ex=65143046&is=6512dec6&hm=13c03c2335da60b813ed97bd88a683172eb56f6d0b3879e768663043b9800033&=&width=960&height=478" />
          <Card node javascript title="ModelViewer Backend" description="Parte backend do projeto de gerenciamento de Arquivos GLB com Integração ao Model Viewer." gitUrl="https://github.com/Revem/backend-model-viewer" printUrl="https://media.discordapp.net/attachments/270850384573104129/1155317236077182986/6eedaa7d-6d3d-4de7-9448-96426f1e2577.png?ex=65143045&is=6512dec5&hm=965a9593152a1bfc955309ae79e63098ad0dff6ef1bdef5387b780d4b11b7026&=&width=960&height=475" />
          <Card node javascript title="Accounts" description="Sistema de simulação de contas bancarias diretamente no terminal. Criado com NodeJS." gitUrl="https://github.com/Revem/Accounts" printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152371766556115004/image.png?width=1210&height=478" />
          <Card node javascript html css title="Thoughts" description="Website para registrar pensamentos e torna-los públicos para os outros utilizadores. Criado com NodeJS, Express e Handlebars." printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152781438991732736/image.png?width=960&height=348" gitUrl="https://github.com/Revem/Thoughts" />
          <Card javascript react css html title="Amanhã vai ser Pior" description="Landing Page para o livro Amanhã vai ser Pior dos Galãs Feios. Criado utilizando ReactJS." gitUrl="https://github.com/Revem/LandingPage-Amanha-Vai-ser-Pior" printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152773244600975481/image.png?width=960&height=358" liveUrl="http://landing-page-amanha-vai-ser-pior.vercel.app" />
          <Card javascript react css html title="Pokedex" description="Pokedex criada utilizando NextJS como treino para consumo de API's" gitUrl="https://github.com/Revem/pokedex/tree/main" printUrl="https://media.discordapp.net/attachments/1152003718762463263/1152792901902938232/image.png?width=960&height=323" liveUrl="http://pokedex-five-sand.vercel.app" />
        </div>
      </motion.div>
    </div>
  );
}
