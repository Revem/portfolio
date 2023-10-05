import { useState } from 'react';
import LanguageComponent from '../LanguageComponent';
import LinkComponent from '../LinkComponent';

export default function Navbar({ lang, setLang }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="top-0 sticky bg-black/60 rounded-md shadow-md backdrop-blur-sm z-50 ">
      <div className="md:flex md:justify-center">
        <div className="md:hidden p-2">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-victorViolet focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="md:flex justify-center">
          <ul
            className={`${isMobileMenuOpen ? 'block' : 'hidden'
              } md:flex md:justify-between md:text-center`}
          >
            <LinkComponent
              title="Home"
              enTitle="Home"
              goto="#Home"
              lang={lang}
            />
            <LinkComponent
              title="Sobre"
              enTitle="About"
              goto="#Sobre"
              lang={lang}
            />
            <LinkComponent
              title="Projetos"
              enTitle="Projects"
              goto="#Projetos"
              lang={lang}
            />
            <LinkComponent
              title="Tecnologias"
              enTitle="Skills"
              goto="#Tecnologias"
              lang={lang}
            />
            <LinkComponent
              title="Contato"
              enTitle="Contact"
              goto="#Contato"
              lang={lang}
            />
            <LanguageComponent lang={lang} setLang={setLang} />
          </ul>
        </div>
      </div>
    </nav>
  );
}
