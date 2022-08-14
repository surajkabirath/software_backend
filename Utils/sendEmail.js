
const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMPT_HOST,
            service: process.env.SMPT_SERVICE,
            port: process.env.SMPT_PORT,
            secure: true,
            auth: {
                user: process.env.SMPT_MAIL,
                pass: process.env.SMPT_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.SMPT_MAIL,
            to: email,
            subject: subject,
            text: text,
        });

      
    } catch (error) {
        // console.log(error, "email not sent");
    }
};

module.exports = sendEmail;
