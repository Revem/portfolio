'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function About() {
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
      className={`p-12 flex items-center`}
    >
      <div className="w-1 h-12 bg-victorViolet mr-4"></div>
      <strong className="text-6xl">Sobre</strong>
      <span className='text-9xl text-victorViolet'>{'{'}</span>
      <h1 className='text-4xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque, nostrum temporibus voluptatem similique quasi officia distinctio aperiam rerum perspiciatis accusamus quia id sunt iste quibusdam accusantium cupiditate neque illo.</h1>
    </motion.main>
  );
}
