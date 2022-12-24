const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("@hapi/joi");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isim: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    soyisim: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    sifre: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    userName: {
      type: String,
    },
    sha: {
      type: String,
    },
    karbonMiktari: {
      type: Number,
      default: 0,
    },
    coinMiktari: {
      type: Number,
      default: 0,
    },
  },
  { collection: "users" }
);

const schema = Joi.object({
  isim: Joi.string().min(2).max(50).trim(),
  soyisim: Joi.string().min(2).max(50).trim(),
  email: Joi.string().trim().email(),
  sifre: Joi.string().trim().min(6),
});

userSchema.methods.joiValidation = function (userObject) {
  schema.required();
  return schema.validate(userObject);
};

userSchema.statics.joiValidationForUpdate = function (userObject) {
  return schema.validate(userObject);
};

/* userSchema.methods.toJSON=function(){
    const user=this.toObject()
    delete user._id
    delete user.__v
    delete user.sifre
    return user
} */

userSchema.statics.girisYap = async (email, sifre) => {
  const { error, value } = schema.validate({ email, sifre });
  if (error) {
    throw createError(error);
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    throw createError("Girilen email/şifre hatalı");
  }
  const sifreKontrol = await bcrypt.compare(sifre, user.sifre);
  if (!sifreKontrol) {
    throw createError("Girilen email/şifre hatalı");
  }
  return user;
};

userSchema.methods.generateToken = async function () {
  const girisYapanUser = this;
  const token = await jwt.sign({ _id: girisYapanUser._id }, "secretKey", {
    expiresIn: "1h",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
