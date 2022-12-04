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
      expiresIn: '6h',
    },
  );

  return accessToken;
}

module.exports = generateToken;
