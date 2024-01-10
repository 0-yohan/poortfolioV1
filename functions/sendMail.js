const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Create a nodemailer transporter (replace with your email service configuration)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'your-receiver-email@example.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
