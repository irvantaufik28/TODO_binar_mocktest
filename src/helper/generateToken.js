const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const accessToken = jwt.sign(user, process.env.JWT_KEY_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_AGE,
  });

  return accessToken;
};

module.exports = { generateToken };
