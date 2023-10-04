import { GiBrazilFlag } from 'react-icons/gi';
import { LiaFlagUsaSolid } from 'react-icons/lia';

export default function LanguageComponent({ title, lang, setLang }) {
  return (
    <li className="p-5">
      <a

        className="relative group"
      >
        {lang === 'pt-br' ? (
          <button className="relative z-10 group-hover:text-victorViolet duration-500 text-3xl" onClick={() => setLang('en-us')}><LiaFlagUsaSolid /></button>
        ) : <button className="relative z-10 group-hover:text-victorViolet duration-500 text-3xl" onClick={() => setLang('pt-br')}><GiBrazilFlag /></button>}
      </a>
    </li>
  );
}
