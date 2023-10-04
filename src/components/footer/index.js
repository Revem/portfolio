export default function Footer({ lang }) {
  return (
    <div className="text-center">
      {lang == 'pt-br' ? <h1>
        feito com <span className="text-victorViolet"> ♥ </span>por <span className="text-victorViolet">Victor</span> Picon
      </h1> : <h1>
        Made with <span className="text-victorViolet"> ♥ </span>by <span className="text-victorViolet">Victor</span> Picon
      </h1>}
    </div>
  )
}