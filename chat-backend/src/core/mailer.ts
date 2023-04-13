import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e5daf388830512",
    pass: "2b641a2127b7fe"
  }
});

export default transport;
