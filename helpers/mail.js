const nodemailer = require("nodemailer");
//const confirmation = require("./mailTemplates/confirmation");

const config = {
  user: "test@example.com",
  pass: "password",
};
/** send email method
 *
 * @param {*} receiver receiver email
 * @param {*} valueObjects values to transfer to view files
 * @param {*} fileName name of email template file
 * @param {*} handleResult  callback function with error ,info
 *  object (info.response) as parameter respectively
 */
exports.sendMail = (receiver, valueObjects, fileName, handleResult) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
  const confirmation = require("../mails/" + fileName);

  const mailOptions = {
    from: config.user,
    to: receiver,
    subject: valueObjects.title,
    html: confirmation.view(valueObjects),
  };

  transporter.sendMail(mailOptions, handleResult);
};
