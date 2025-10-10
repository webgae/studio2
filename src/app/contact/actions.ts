'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import ContactEmail from '@/components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactData = z.infer<typeof contactSchema>;

export async function sendEmail(data: ContactData) : Promise<{success: boolean, error?: string}> {
  const validation = contactSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: 'Datos de formulario no válidos.' };
  }

  const { name, email, message } = validation.data;
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'WEBGAE <onboarding@resend.dev>', // Should be a verified domain
      to: ['delivered@resend.dev'], // Your actual email address
      subject: `Nuevo mensaje de contacto de ${name}`,
      reply_to: email,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: 'Error al enviar el correo.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error en sendEmail:', error);
    return { success: false, error: 'Se ha producido un error inesperado.' };
  }
}
