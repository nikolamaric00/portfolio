import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";

export default async (req, res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: process.env.SENDGRID_API_KEY,
      },
    })
  );
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: subject,
      html: `<p>Form submission from <strong>${name}</strong>.</p>
      <p>Reply to: ${email}</p>
      <p>Message: ${message}</p>
      `,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
