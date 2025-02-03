const nodemailer = require("nodemailer");

// Configure the transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Correct host for Gmail
  port: 465, // Use 465 for secure connection
  secure: true, // Use SSL/TLS
  auth: {
    user: "ramaradham@gmail.com", // Your Gmail address
    pass: "prztwlnblvznvxmk", // Your Gmail app password
  },
});

// Function to send an email
async function sendMail(to, subject, text, html) {
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"RentRover" <ramaradham@gmail.com>', // Sender address
      to, // Recipient address
      subject, // Email subject
      text, // Plain text content
      html, // HTML content (optional)
    });

    console.log("Email sent successfully: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Ensure errors are caught and handled
  }
}

module.exports = { sendMail };
