'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sendContactForm } from "../../lib/api";

export default function Contacts() {
  const initValues = { name: "", email: "", message: "" };
  const initState = { values: initValues };
  const controls = useAnimation();
  const [state, setState] = useState(initState)
  const [isVisible, setIsVisible] = useState(false);

  const { values } = state

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
      className={`p-24 flex flex-col`}
    >
      <div className='flex items-center'>
        <div className="w-1 h-12 bg-victorViolet mr-4"></div>
        <strong className="text-6xl">Contato</strong>
      </div>
      <div className=''>
        <div className='flex flex-col items-start mt-12 ml-8'>
          <form onSubmit={onSubmit} className='border-2 p-5 pl-16 pr-16 rounded-md rounded-tl-2xl hover:border-white border-victorViolet transition-all duration-500'>
            Nome:
            <input
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              placeholder='Nome'
              className='bg-black border-2 ml-5 mb-5 border-victorViolet hover:border-white rounded-md rounded-tl-xl p-2 transition-all duration-500'
            /><br />
            Email:
            <input
              type="email"
              name='email'
              placeholder='E-mail'
              value={values.email}
              onChange={handleChange}
              className='bg-black border-2 ml-5 border-victorViolet hover:border-white rounded-md rounded-tl-xl p-2 transition-all duration-500'
            />
            <br /> <br />
            Mensagem:<br />
            <textarea
              name='message'
              rows="4"
              cols="30"
              placeholder='Sua mensagem'
              value={values.message}
              onChange={handleChange}
              className='bg-black border-2 border-victorViolet hover:border-white rounded-md rounded-tl-xl p-2 transition-all duration-500'
            /> <br />
            <button onClick={onSubmit} className='border-2 border-victorViolet rounded-md rounded-tl-xl hover:bg-victorViolet hover:text-black transition-all duration-500'>Enviar </button>
          </form>
        </div>
      </div>
    </motion.main>
  );
}
