const userModel = require("../model/user.model");
const { verifyToken } = require("../utils/auth.utils");

async function checkAuth(req, res, next) {
    try {
      const authorization = req?.headers?.authorization;
      if (!authorization) {
        throw { status: 401, message: "authorization header is missing" };
      }
  
      const [bearer, token] = authorization.split(" ");
      if (bearer && bearer.toLowerCase() === "bearer") {
        if (token) {
          const verifyResult = verifyToken(token);
          const user = await userModel.findOne({ email: verifyResult.email });
          if (!user) throw { status: 401, message: "login again" };
          req.isAuthenticated = !!user;
          req.user = {
            firstName: user.firstName,
            email: user.email,
          };
          next();
        } else {
          throw { status: 401, message: "token is missing" };
        }
      } else {
        throw { status: 401, message: "invalid authorization format" };
      }
    } catch (error) {
      next(error);
    }
  }
  

module.exports = {
  checkAuth,
};
