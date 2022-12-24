const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const sonuc = jwt.verify(token, "secretKey");
    const bulunanUser = await User.findById({ _id: sonuc._id });
    if (bulunanUser) {
      req.user = bulunanUser;
    } else {
      throw new Error("Kullanıcı veritabanında yok");
    }
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = auth;
