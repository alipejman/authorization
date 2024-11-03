const { Router } = require("express");
const { login, register } = require("../controller/auth.controller");
const { getProfile } = require("./../controller/profile.controller");

const router = Router();
router.get("/profile", getProfile);

module.exports = {
  Profileroutes: router,
};
