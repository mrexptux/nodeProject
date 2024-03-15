const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require("../../utils/error.util");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");
const { jwtDecode } = require("jwt-decode");



const register = async (req, res, next) => {
  try {
    const user = new User(req.body);

    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      return next(setError("404", "This email has already been used."));
    }
    const userDB = await user.save();
    return res.status(201).json({
      status: 201,
      message: `User ${userDB.email} created`,
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {


  try {
    const userInfo = await User.findOne({ email: req.body.email });

    if (bcrypt.compareSync(req.body.password, userInfo.password)) {

      userInfo.password = "*************"; // ocultamos el dato password en la respuesta por seguridad

      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email,
          role: userInfo.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        data: { massage: HTTPSTATUSCODE[200], user: userInfo, token: token },
      });


    } else {
      return res.json({
        status: 400,
        message: "El password es incorrecto",
        data: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};

/*const logout = (req, res, next) => {

  const refreshToken = req.cookies.refreshToken;

  console.log(refreshToken);

};*/

/*const isAdmin = (req, res, next) => {

  const data = req.headers.authorization.split(" ");
  console.log(data);


  const decoded = jwtDecode(data[1]);
  console.log(decoded);

  const admin = decoded.role == "admin" ? true : false;
  console.log("isAdmin", admin);
  return admin;


};*/

module.exports = { register, login };
