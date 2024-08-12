import * as brevo from '@getbrevo/brevo';
import {contactoHTML} from './templates/contacto-html'

const apiBrevo = new brevo.TransactionalEmailsApi();

apiBrevo.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY 
)

export async function EnviarEmail( mail, nombre, mensaje ) {

    try{
        const smtpEmail = new brevo.SendSmtpEmail()
        smtpEmail.subject = "Te contactaron desde el portfolio";
        smtpEmail.to = [{ email: 'gastongarcia650@gmail.com', name: 'Gastón García' }];
        smtpEmail.htmlContent = contactoHTML;
        smtpEmail.sender = { email: 'gastongarcia650@gmail.com', name: 'Gastón García' };
        smtpEmail.params = { "mensaje": mensaje, "nombre": nombre, "email": mail };
    
        await apiBrevo.sendTransacEmail(smtpEmail);

    } catch (error){
        console.error(error);
    }
}