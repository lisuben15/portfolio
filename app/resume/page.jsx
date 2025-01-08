"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "Sobre mí",
  description:
    "Desarrollador de software con experiencia en frontend y backend. Me enfoco en crear soluciones innovadoras y optimizadas, siempre buscando aprender y mejorar mis habilidades.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Gastón García",
    },
    {
      fieldName: "Teléfono",
      fieldValue: "+54 11 2704 1572 ",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Argentino",
    },
    {
      fieldName: "Lenguajes",
      fieldValue: "Español",
    },
    {
      fieldName: "Email",
      fieldValue: "garcia_gaston_1991@hotmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi experiencia",
  description:
    "Desarrollador de software con experiencia en proyectos académicos y trabajos freelance. Creciendo en el desarrollo Fullstack, creando soluciones completas y eficientes. Disfruto trabajando en equipo y continuamente busco aprender nuevas tecnologías y metodologías para mejorar mis habilidades y aportar más valor a los proyectos.",
  items: [
    {
      company: "Freelance",
      position: "Desarrollador Fullstack",
      duration: "Agosto 2023 - Julio 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi educación",
  description:
    "Formación académica en programación y desarrollo de software, con un enfoque práctico y orientado a la resolución de problemas.",
  items: [
    {
      institution: "Universidad Tecnológica Nacional",
      degree: "Técnico Universitario en Programación",
      duration: "2022 - 2024",
    },
  ],
};

const skills = {
  title: "Habilidades",
  description:
    "Comprometido con el aprendizaje continuo y la mejora constante. Me esfuerzo por perfeccionar el manejo de las tecnologías que utilizo y estoy siempre dispuesto a incorporar nuevas herramientas para contribuir de manera efectiva a los proyectos y resolver desafíos con profesionalismo.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto ">
        <Tabs
          defaultValue="experience"
          className=" flex flex-col lg:flex-row gap-[60px]"
        >
          <div className=" w-full flex justify-center items-center lg:justify-start lg:items-start">
            <TabsList className=" flex flex-col w-[380px] gap-6 ">
              <TabsTrigger value="experience">Experiencia</TabsTrigger>
              <TabsTrigger value="education">Educación</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
              <TabsTrigger value="about">Sobre Mi</TabsTrigger>
            </TabsList>
          </div>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[190px] py-6 px-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 min-w-[290px]"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className=" flex items-center gap-3 pt-4">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-xs">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full  h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className=" flex flex-col gap-[30px] w-full">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center lg:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md md:text-lg">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
