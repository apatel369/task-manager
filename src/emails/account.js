const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ap.patel1893@gmail.com',
        subject: 'Thanks for sign in',
        text: `Welcome to app, ${name}. Let me know if any ques.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ap.patel1893@gmail.com',
        subject: 'Good Bye',
        text: `${name}, Let me know if I can help you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}