import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rohit.gajam@techstalwarts.com',
        pass: 'techstal123'
    }
});


let mailOptions = {
    from: 'rohit.gajam@techstalwarts.com',
    to: 'rohitlgajam123@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer.'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

export const mailOptions