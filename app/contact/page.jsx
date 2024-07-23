"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {crearContactoAction} from "@/lib/actions/action";
import {showToast} from "@/lib/toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "(+54) 11 2704 1572",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "garcia_gaston_1991@hotmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Dirección",
    description: "Bombona 458, José.C.Paz, Argentina",
  },

];

import { motion } from "framer-motion";



const Contact = () => {

  const handleSubmit = async (event) => {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await crearContactoAction(formData);
    showToast("success", <p className="flex items-center h-[50px]">Se ha enviado con éxito.</p>);
  }

  return <motion.section initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form  onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
            <p className="text-white/60">Estoy emocionado de colaborar en tu próximo proyecto. Completa el formulario a continuación y me pondré en contacto contigo lo antes posible para discutir cómo puedo ayudarte a alcanzar tus objetivos.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <Input name="nombre" type="firstname" placeholder="Nombre" />
              <Input name="email" type="email" placeholder="Email " />

            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione un servicio">

                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Seleccione un servicio </SelectLabel>
                  <SelectItem value="est">Web Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea className="h-[200px]" placeholder="Escribe tu mensaje aquí"></Textarea>

            <button type="submit" className=" text-nowrap rounded-full bg-[#00ff99] text-[#1c1c22] h-[44px] font-semibold px-4" >Enviar mensaje</button>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li Key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>;

};

export default Contact