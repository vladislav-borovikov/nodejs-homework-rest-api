const { User } = require("../../models/user");
const { sendEmail } = require("../../helpers");

const resendingVerification = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!email) {
    res.status(400).json({ message: "missing required field email" });
  }
  if (user.verify === false) {
    res.status(400).json({ message: "Verification has already been passed" });
  }
  const mail = {
    to: email,
    subject: "Подтверждение регистрации",
    html: `<a target="_blank" href="http://localhost:4000/api/users/verify/${user.verificationToken}"> Подтвердите Email</a>`,
  };

  await sendEmail(mail);
  return res.status(200).json({
    message: "verification email was resend",
  });
};

module.exports = {
  resendingVerification,
};
