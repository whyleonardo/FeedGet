import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "adaca088bf35ea",
    pass: "aff0a361bbe030"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail({ subject, body}: SendMailData) { 
   
  await transport.sendMail({
         from: 'Equipe Feedget <oi@feedget.com',
         to: 'Leonardo <pleasefloyd73@gmail.com>',
         subject,
         html: body
   })
 }

}

