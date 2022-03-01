const asyncHandler = require("express-async-handler");

// import model
const User = require("../../models/User");

// Import Helpers
const { generateJWTToken } = require("../../utils/helpers");

const addNewUser = asyncHandler(async (request, response) => {
  const { userInfo } = request.body;

  console.log("Invoked");

  const newUser = await User.create(userInfo);

  response.status(201).json(newUser);
});

const deleteUser = asyncHandler(async (request, response) => {
  const user = await User.findByIdAndDelete(request.params.Id);

  response.status(200).json(user);
});

const userResetPassword = asyncHandler(async (request, response) => {});

const loginUser = asyncHandler(async (request, response) => {
  const { username, password, email } = request.body;

  const user = await User.login(username, email, password);

  if (user) {
    response.status(200).json({
      _id: user.id,
      first_name: user.fullName[0].firstName,
      last_name: user.fullName[1].lastName,
      email: user.email,
      user_name: user.username,
      token: await generateJWTToken(user._id),
    });
  } else {
    response.status(403).json("Denied");
  }
});

module.exports = {
  addNewUser,
  deleteUser,
  userResetPassword,
  loginUser,
};
