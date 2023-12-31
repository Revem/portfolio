import {
  FaExternalLinkAlt,
  FaGithubAlt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';

import {
  BiLogoCss3,
  BiLogoDiscordAlt,
  BiLogoHtml5,
  BiLogoMongodb,
  BiLogoPython,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';

export default function Card({
  title,
  description,
  gitUrl,
  liveUrl,
  printUrl,
  node,
  java,
  javascript,
  springboot,
  mongo,
  discord,
  python,
  html,
  css,
  tailwind,
  typescript,
  react,
  lang,
  enTitle,
  enDescription,
}) {
  return (
    <div className='flex flex-col sm:flex-row items-center group'>
      {printUrl ? (
        <img
          src={printUrl}
          className='object-cover p-4 max-w-xs md:max-w-md h-full rounded-md rounded-tl-2xl'
          alt=''
        ></img>
      ) : (
        <img
          src='https://www.vets4pets.com/siteassets/species/dog/chocolate-labrador-looking-anxious.jpg?w=585&scale=down'
          className='p-4 max-w-md rounded-md rounded-tl-2xl'
          alt=''
        ></img>
      )}
      <div className='-ml-0 sm:-ml-24 border-solid bg-victorViolet bg-opacity-10 backdrop-blur-md border-victorViolet hover:border-white border-2 rounded-tl-3xl rounded-md items-center justify-center flex-row max-w-md self-center place-self-center hover:-translate-y-6 transition-all text-center'>

        <strong className={`p-4 text-victorViolet underline text-xl sm:text-2xl`}>
          {lang == 'pt-br' ? <>{title}</> : <>{enTitle}</>}
        </strong>
        <h2 className={`p-5 text-lg`}>
          {lang == 'pt-br' ? <>{description}</> : <>{enDescription}</>}
        </h2>
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
          {react ? <FaReact /> : <></>}
        </div>
        {(gitUrl || liveUrl) && (
          <div>
            <div className='flex justify-around mt-5 mb-5 mr-0 sm:mr-24 ml-0 sm:ml-24'>
              {gitUrl ? (
                <a href={gitUrl}>
                  <button className='border-2  rounded-md border-victorViolet hover:bg-victorViolet hover:text-black hover:rounded-tl-2xl transition-all duration-500 p-1 flex items-center text-lg'>
                    <FaGithubAlt className='text-xl mr-2' />
                    {'Github'}
                  </button>
                </a>
              ) : (
                <></>
              )}
              {liveUrl ? (
                <a href={liveUrl}>
                  <button className='border-2  rounded-md border-victorViolet hover:bg-victorViolet hover:text-black hover:rounded-tl-2xl transition-all duration-500 p-1 flex items-center text-lg'>
                    <FaExternalLinkAlt className='text-xl mr-2' />
                    Deploy
                  </button>
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
