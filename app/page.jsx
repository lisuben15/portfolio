import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaAngular, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const Home = () => {

  const skills = {
    title: "Tecnologías utilizadas",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "HTML 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },
      {
        icon: <FaJs />,
        name: "Javascript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind",
      },
      {
        icon: <FaAngular />,
        name: "Angular",
      },
      {
        icon: <FaFigma />,
        name: "Figma",
      },
      
    ]

  }

  return (
    <seccion className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">

            <h1 className="h1 mb-6 text-balance ">
              Hola soy <span className="text-accent">Gastón</span>
            </h1>
            <span className="text-2xl text-accent">Desarrollador Fullstack</span>
            <p className="max-w-[500px] mb-9 text-white/80">
              Estudiante - Técnico Universitario en Programación. Universidad Tecnológica Nacional. Freelancer con más de 1 año de experiencia en tecnologías .NET y React.  </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Descargar CV</span>
                <FiDownload className="text-xl"></FiDownload>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"></Social>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo></Photo>
          </div>
        </div>
      </div>
      <Stats />
      <div className="flex flex-col gap-[30px] container my-20">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{skills.title}</h3>       
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
          {skills.skillList.map((skill, index) => {
            return <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full  h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          })}
        </ul>
      </div>
    </seccion>
  )
}

export default Home