const jwt = require('jsonwebtoken');
const resData = require('../../helper/response');

function getToken(authHeader) {
  let splitHeader;

  try {
    splitHeader = authHeader.split(' ');
  } catch (error) {
    console.log(error);
    return null;
  }

  if (splitHeader.length > 1) {
    return splitHeader[1];
  }

  return splitHeader[0];
}

const authorized = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization !== undefined && typeof authorization !== 'string') {
    return null;
  }

  let token = getToken(authorization);

  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_KEY_SECRET);
  } catch (error) {
    console.log(error);
    return res.status(401).json(resData.failed('unauthorized'));
  }

  req.user = {
    id: payload.id,
    name: payload.name,
    pin: payload.pin,
    
  };

  next();
};


module.exports = { authorized };