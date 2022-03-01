const {
  addNewUser,
  deleteUser,
  userResetPassword,
  loginUser,
} = require("../../controllers/user/userController");

const router = require("express").Router();

router.post("/add", addNewUser);

router.delete("/delete/id/:Id", deleteUser);

router.put("/reset", userResetPassword);

router.post("/login", loginUser);

module.exports = router;
