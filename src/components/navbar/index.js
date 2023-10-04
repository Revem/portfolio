import LanguageComponent from '../LanguageComponent'
import LinkComponent from '../LinkComponent'

export default function Navbar({ lang, setLang }) {
  return (
    <nav className="top-0 sticky bg-black/60 rounded-md shadow-md backdrop-blur-sm z-50">
      <ul className="flex justify-center content-between">
        <LinkComponent title='Home' enTitle='Home' goto="#Home" lang={lang} />
        <LinkComponent title='Sobre' enTitle='About' goto="#Sobre" lang={lang} />
        <LinkComponent title='Projetos' enTitle='Projects' goto="#Projetos" lang={lang} />
        <LinkComponent title='Tecnologias' enTitle='Skills' goto="#Tecnologias" lang={lang} />
        <LinkComponent title='Contato' enTitle='Contact' goto="#Contato" lang={lang} />
        <LanguageComponent lang={lang} setLang={setLang} />
      </ul>

    </nav>
  )
}