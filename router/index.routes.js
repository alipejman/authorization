const { Router } = require("express");
const {Authroutes} = require("./auth.routes");

const router =  Router();

router.use('/auth', Authroutes);

module.exports = {
    Allroutes: router,
}