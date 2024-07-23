"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [

  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Contribuí al proyecto creando componentes reutilizables con Angular, basándome en diseños de Figma, y realicé pruebas exhaustivas para garantizar una interfaz de usuario eficiente y atractiva.",
    stack: [{ name: "Angular" }, { name: "Html" }, { name: "Css" }, { name: "Typescript" }],
    image: "/assets/Normafin.PNG",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "Participé en el desarrollo de una aplicación de códigos referidos, enfocándome en el frontend y el testing. Utilicé tecnologías como Next.js y Tailwind CSS. Implementé el diseño responsivo, asegurando una experiencia de usuario consistente en dispositivos móviles y de escritorio.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/Referity.PNG",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description: "Desarrollé una aplicación bancaria completa, desde la base de datos hasta la interfaz de usuario. Utilizando Java, HTML5 y Bootstrap. El proyecto incluye gestión de cuentas, transferencias y generación de informes. La aplicación está dividida en capas, separando la lógica de negocio, datos y presentación, asegurando una estructura robusta y escalable.",
    stack: [{ name: "Java" }, { name: "Bootstrap" }, { name: "Html 5" }],
    image: "/assets/Capturahome.PNG",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project 4",
    description: "Desarrollé una aplicación de gestión de restaurantes utilizando C# en .NET, ASP.NET y SQL SERVER. La aplicación incluye funcionalidades como la gestión de reservas, administración de menús y un sistema completo CRUD para la gestión de empleados.",
    stack: [{ name: "C#" }, { name: "CSS" }, { name: "ASP.NET" }, { name: "Azure" }],
    image: "/assets/rgbResto.PNG",
    live: "",
    github: "https://github.com/lisuben15/RGB-RESTO",
  },
 

]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
         opacity: 1,
          transition: {delay:2.4, duration:0.4, ease: "easeIn"}, 
        }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link target="_blank" href={project.github} >               
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
             spaceBetween={30}
              slidesPerView={1}
               className="xl:h-[520px] mb-12"
               onSlideChange={handleSlideChange}
               >
                  
                  
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className="w-full ">
                  <div className="h-[460px] relative group flex justify-center items-center bg-[#232329]">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-[585px] h-[460px] ">
                    <Image src={project.image} fill className="object-contain" alt="" />
                  </div>
                  </div>
                </SwiperSlide>;
              })}
              <WorkSliderBtns containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
               xl:bottom-0 z-20 w-full justify-between xl:w-max xl:jusify-none" btnStyles="bg-accent hover:bg-accent-hover 
               text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work