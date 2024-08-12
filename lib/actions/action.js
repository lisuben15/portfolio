"use server"

import {z} from 'zod';
import { EnviarEmail } from '../envio-email/brevo';
import { redirect } from 'next/navigation';


const FormContactoSchema = z.object({
    nombre: z.string().max(100),
    email: z.string().email().max(50),
    mensaje: z.string().max(2500),
});

export async function crearContactoAction(formData){
    const datos = Object.fromEntries(formData.entries());
    const datosValidados = FormContactoSchema.parse(datos);

    await EnviarEmail(datosValidados.email, datosValidados.nombre, datosValidados.mensaje);
    redirect('/');
}