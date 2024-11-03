const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const jwt = require('jsonwebtoken');
const secret = '4f1feeca525de4cdb064656007da3edac7895a87ff0ea865693300fb8b6e8f9c';
function hashpass(password) {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
}
function confirmPassword(password, hashed) {
    return compareSync(password, hashed);
}

function signToken(payload) {
    return jwt.sign(payload, secret);
}
function verifyToken(token) {
    return jwt.verify(token, secret);
}

module.exports = {
    hashpass,
    confirmPassword,
    verifyToken,
    signToken
}