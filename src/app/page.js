'use client'
import Contacts from '@/pages/Contacts';
import Experiences from '@/pages/Experiences';
import Projects from '@/pages/Projects';
import Tecnologies from '@/pages/Tecnologies';
import { useEffect, useState } from 'react';
import Footer from '../../src/components/footer';
import Navbar from '../../src/components/navbar';
import About from '../../src/pages/About';
import Main from '../../src/pages/Main';

export default function Home() {
  const [language, setLanguage] = useState('pt-br')

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    const isPortuguese = userLanguage.toLowerCase().startsWith('pt');

    setLanguage(isPortuguese ? 'pt-br' : 'en-us');
  }, []);

  return (<>
    <Navbar lang={language} setLang={setLanguage} />
    <Main lang={language} />
    <About lang={language} />
    <Projects lang={language} />
    <Tecnologies lang={language} />
    <div className='flex flex-col md:flex-row items-start justify-around align-top'>
      <Experiences lang={language} />
      <Contacts lang={language} />
    </div>



    <Footer lang={language} />
  </>
  )
}
