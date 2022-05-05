import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "83f1557f16284f",
        pass: "9c347fe15ea29e"
    }
});

export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({
        subject,
        body: html
    }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Igor Semphoski de Assis <igorsemphoski@gmail.com",
            subject,
            html
        });
    }

}