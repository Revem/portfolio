export default function ExperienceCard({ cargo, empresa, descricao }) {
  return (
    <div className=" items-center">
      <div className="mt-5">
        <strong>
          💼 {cargo}
        </strong>
      </div>
      <br />
      <h2 className="text-victorViolet">
        🏢 {empresa}
      </h2>
      <br />
      <div>
        {descricao}
      </div>
      <div className="pt-5 pb-5"></div>
    </div>
  )
}