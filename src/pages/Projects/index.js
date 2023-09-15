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
      <div className='flex justify-around mt-24'>
        <Card />
        <Card />
        <Card />
      </div>
    </motion.main>
  );
}
