// functions/sendMail.js

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ameen786ua@gmail.com', // Your Gmail email address
        pass: 'ameengenius', // Your Gmail password or an app-specific password
      },
    });

    // Setup email data
    const mailOptions = {
      from: 'ameen786ua@gmail.com',
      to: 'carbylearns@gmail.com', // Your email address to receive messages
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', info }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email', error }),
    };
  }
};
