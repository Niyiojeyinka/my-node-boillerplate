const nodemailer = require("nodemailer");
//const confirmation = require("./mailTemplates/confirmation");

const config = {
  user: "chronicwatchza@gmail.com",
  pass: "AFSA_Health_Department+27",
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
    html: confirmation.confirmation(valueObjects),
  };

  transporter.sendMail(mailOptions, handleResult);
};
