import LinkComponent from '../LinkComponent'

export default function Navbar() {
  return (
    <nav className="top-0 sticky bg-black/60 rounded-md shadow-md backdrop-blur-sm">
      <ul className="flex justify-center content-between">
        <LinkComponent title='Home' goto="#Home" />
        <LinkComponent title='Sobre' goto="#Sobre" />
        <LinkComponent title='Projetos' />
        <LinkComponent title='Tecnologias' />
        <LinkComponent title='Contato' />
      </ul>

    </nav>
  )
}