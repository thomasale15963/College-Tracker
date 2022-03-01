const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protectRoute = asyncHandler(async (request, response, next) => {
  let token;

  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = request.headers.authorization.split(" ")[1];

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      request.user = await User.findById(decodedToken.id).select("-password");

      next();
    } catch (e) {
      console.log(e);

      response.status(401).json("Denied");
    }
  }

  if (!token) {
    response.status(401).json("No Token");
  }
});

module.exports = { protectRoute };
