const userModel = require("../model/user.model");
const { verifyToken } = require("../utils/auth.utils");

async function checkAuth(req, res, next) {
  try {
    const authorization = req?.headers?.authorization;
    const [bearer, token] = authorization?.split(" ");
    if (bearer && bearer.toLowerCase() === "bearer") {
      if (token) {
        const verifyResult = verifyToken(token);
        const user = await userModel.findOne({ email: verifyResult.email });
        if (!user) throw { status: 401, messgae: "login again" };
        req.isAuthenticated = !!user;
        req.user = {
            firstName: user.firstName,
            email: user.email
        }
        next();
      }
      if(!user) throw {status: 401, messgae: 'login again'}
    }
    if (!user) throw { status: 401, messgae: "authorization failed" };
  } catch (error) {
    next(error);
  }
}


module.exports = {
    checkAuth
}