import {
  FaExternalLinkAlt, FaGithubAlt,
  FaJava,
  FaJs,
  FaNodeJs
} from 'react-icons/fa'

import {
  BiLogoCss3,
  BiLogoDiscordAlt,
  BiLogoHtml5,
  BiLogoMongodb,
  BiLogoPython,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript
} from 'react-icons/bi'

export default function Card({ title, description, gitUrl, liveUrl, printUrl, node, java, javascript, springboot, mongo, discord, python, html, css, tailwind, typescript }) {
  return (
    <div className="border-solid border-victorViolet border-2 rounded-tl-3xl rounded-md items-center justify-center flex-row max-w-md self-center place-self-center hover:-translate-y-6 transition-all">
      {printUrl ? <img src={printUrl} className="p-4 max-w-md rounded-md rounded-tl-2xl"></img> : <img src="https://www.vets4pets.com/siteassets/species/dog/chocolate-labrador-looking-anxious.jpg?w=585&scale=down" className="p-4 max-w-md rounded-md rounded-tl-2xl"></img>}
      <h1 className='p-4'>
        {title ? title : "Em breve"}
      </h1>
      <h2 className="p-5">{description ? description : "Em construção"}</h2>
      <div className='flex justify-around p-5 text-4xl text-victorViolet'>
        {node ? <FaNodeJs /> : <></>}
        {java ? <FaJava /> : <></>}
        {javascript ? <FaJs /> : <></>}
        {springboot ? <BiLogoSpringBoot /> : <></>}
        {mongo ? <BiLogoMongodb /> : <></>}
        {discord ? <BiLogoDiscordAlt /> : <></>}
        {python ? <BiLogoPython /> : <></>}
        {html ? <BiLogoHtml5 /> : <></>}
        {css ? <BiLogoCss3 /> : <></>}
        {tailwind ? <BiLogoTailwindCss /> : <></>}
        {typescript ? <BiLogoTypescript /> : <></>}
      </div>
      <div className="flex justify-around mt-5 mb-5">
        {gitUrl ? <a href={gitUrl}><button className="border-2  rounded-md border-victorViolet hover:bg-victorViolet hover:text-black hover:rounded-tl-2xl transition-all duration-500 p-1"><FaGithubAlt /></button></a> : <></>}
        {liveUrl ? <a href={liveUrl}><button className="border-2  rounded-md border-victorViolet hover:bg-victorViolet hover:text-black hover:rounded-tl-2xl transition-all duration-500 p-1"><FaExternalLinkAlt /></button></a> : <></>}
      </div>



    </div>
  )
}