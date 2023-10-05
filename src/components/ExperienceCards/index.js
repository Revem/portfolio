export default function ExperienceCard({ cargo, empresa, descricao, lang, enCargo, enDescricao }) {
  return (
    <div className="items-center">
      <div className="mt-2 md:mt-5">
        <strong className="text-lg md:text-xl">
          💼 {lang === 'pt-br' ? <>{cargo} </> : <>{enCargo}</>}
        </strong>
      </div>
      <br />
      <h2 className="text-victorViolet text-lg md:text-xl">
        🏢 {empresa}
      </h2>
      <br />
      <div className="text-sm md:text-base">
        {lang === 'pt-br' ? <>{descricao} </> : <>{enDescricao}</>}
      </div>
      <div className="pt-2 md:pt-5"></div>
    </div>
  )
}
