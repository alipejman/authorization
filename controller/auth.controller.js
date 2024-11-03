const userModel = require("../model/user.model");
const { hashpass, signToken, confirmPassword } = require("../utils/auth.utils");

async function register(req, res, next) {
  try {
    const { firstName, email, password } = req.body;
    const user = await userModel.create({
      firstName,
      email,
      password: hashpass(password), 
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
try {
  const {email, password} = req.body;
  const user = await userModel.findOne({email});
  if(!user) {
    throw{
      status: 404,
      message: 'user not found'
    }
  }
  if(confirmPassword(password, user.password)) {
    const token = signToken({id: user._id, email: user.email})
    res.send({token, message: 'login seccessfully'})
  }else{
    throw{
      status: 400,
      message: 'email or password is incorrect...'
    }
  }
} catch (error) {
  next(error);
}
}

module.exports = {
  register,
  login,
};
