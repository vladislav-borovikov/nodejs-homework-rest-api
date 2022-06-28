const { registerUser } = require("./register");
const { login } = require("./login");
const { getCurent } = require("./getCurrent");
const { logout } = require("./logout");
const { patchAvatar } = require("./patchAvatar");
const { verification } = require("./verification");
const { resendingVerification } = require("./resendingVerification");

module.exports = {
  registerUser,
  login,
  getCurent,
  logout,
  patchAvatar,
  verification,
  resendingVerification,
};
