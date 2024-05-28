const nodemailer=require('nodemailer');

const SendEmail=async(EmailTo, EmailSubject, EmailText)=>{
    const transporter=nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure:false,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        },
        tls:{rejectUnauthorized:false}
    });

    const mailOptions={
        from:"MERN-Stack-Full-Fledged-E-commerce-Website " + process.env.SMTP_USER,
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    };
    return await transporter.sendMail(mailOptions);
}

module.exports=SendEmail;