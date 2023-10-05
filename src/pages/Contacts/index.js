'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sendContactForm } from "../../lib/api";

export default function Contacts({ lang }) {
  const initValues = { name: "", email: "", message: "" };
  const initState = { values: initValues };
  const controls = useAnimation();
  const [state, setState] = useState(initState);
  const [isVisible, setIsVisible] = useState(false);

  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

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
      id="Contato"
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className={`p-4 md:p-24 flex flex-col justify-center content-center`}
    >
      <div className='flex items-center justify-center'>
        <div className="hidden md:flex w-1 h-12 bg-victorViolet mr-4"></div>
        {lang == 'pt-br' ? (<strong className="text-4xl md:text-6xl">Contato</strong>) : (<strong className="text-4xl md:text-6xl">Contact</strong>)}
      </div>
      <div className=''>
        <div className='flex flex-col items-start mt-12'>
          <form onSubmit={onSubmit} className='border-2 p-5 pl-8 pr-8 rounded-md rounded-tl-2xl hover:border-white border-victorViolet transition-all duration-500'>
            {lang == 'pt-br' ? (
              <>
                <label htmlFor="name" className="text-xl mb-1">Nome:</label>
                <br />
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={values.name}
                  onChange={handleChange}
                  placeholder='Nome'
                  className='bg-black border-2 w-44 mb-3 md:w-auto border-victorViolet hover:border-white rounded-md p-1 text-sm sm:text-base transition-all duration-500'
                />
              </>

            ) : (
              <>
                <label htmlFor="name" className="text-xl mb-1">Name:</label>
                <br />
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={values.name}
                  onChange={handleChange}
                  placeholder='Name'
                  className='bg-black border-2 mb-3 w-44 md:w-auto border-victorViolet hover:border-white rounded-md p-1 text-sm sm:text-base transition-all duration-500'
                />
              </>
            )}
            <br />
            <label htmlFor="email" className="text-xl mb-1">{lang == 'pt-br' ? 'Email:' : 'E-mail:'}</label>
            <br />
            <input
              type="email"
              name='email'
              id='email'
              placeholder={lang == 'pt-br' ? 'E-mail' : 'Email'}
              value={values.email}
              onChange={handleChange}
              className='bg-black border-2 mb-3 border-victorViolet hover:border-white rounded-md p-1 text-sm sm:text-base transition-all duration-500 w-44 md:w-auto'
            />
            <br />
            <label htmlFor="message" className="text-xl mb-1">{lang == 'pt-br' ? 'Mensagem:' : 'Message:'}</label>
            <br />
            <textarea
              name='message'
              id='message'
              rows="4"
              cols="19"
              placeholder={lang == 'pt-br' ? 'Sua mensagem' : 'Your message'}
              value={values.message}
              onChange={handleChange}
              className='bg-black border-2 border-victorViolet hover:border-white rounded-md p-1 text-sm sm:text-base transition-all duration-500'
            />
            <br />
            <button type="submit" className='border-2 border-victorViolet rounded-md rounded-tl-2xl hover:bg-victorViolet hover:text-black transition-all duration-500'>
              {lang == 'pt-br' ? 'Enviar' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </motion.main>
  );
}
