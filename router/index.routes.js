const { Router } = require("express");
const { Authroutes } = require("./auth.routes");
const { checkAuth } = require("../middleware/check-auth");
const { Profileroutes } = require("./profile.routes");

const router = Router();

router.use("/auth", Authroutes);
router.use("/user", checkAuth, Profileroutes);

module.exports = {
  Allroutes: router,
};
