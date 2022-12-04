const jwt = require('jsonwebtoken');

function generateToken(data) {
  const userData = {
    id: data.id,
    name: data.name,
    pin: data.pin,
  };

  const accessToken = jwt.sign(
    userData,
    process.env.JWT_KEY_SECRET,
    {
      expiresIn: process.env.JWT_TOKEN_AGE,
    },
  );

  return accessToken;
}

module.exports = generateToken;
