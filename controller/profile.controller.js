const userModel = require("../model/user.model");

async function getProfile(req, res, next) {
  return res.send(req.user);
}

module.exports = {
  getProfile
};
