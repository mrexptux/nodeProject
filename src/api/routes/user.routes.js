const express = require("express");
const userRouter = express.Router();
const { register, login, logout, isAdmin } = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/auth.middleware");

userRouter.post("/register", register);
userRouter.post("/login", login);

//userRouter.post("/logout", [isAuth], logout);
//userRouter.post("/isadmin", [isAuth], isAdmin);

module.exports = userRouter;
