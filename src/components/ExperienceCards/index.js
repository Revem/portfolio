export default function ExperienceCard({ cargo, empresa, descricao, lang, enCargo, enDescricao }) {
  return (
    <div className=" items-center">
      <div className="mt-5">
        <strong>
          💼 {lang == 'pt-br' ? <>{cargo} </> : <>{enCargo}</>}
        </strong>
      </div>
      <br />
      <h2 className="text-victorViolet">
        🏢 {empresa}
      </h2>
      <br />
      <div>
        {lang == 'pt-br' ? <>{descricao} </> : <>{enDescricao}</>}

      </div>
      <div className="pt-5 pb-5"></div>
    </div>
  )
}