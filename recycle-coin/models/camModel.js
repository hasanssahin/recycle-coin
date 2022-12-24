const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const camSchema = new Schema(
  {
    sha: String,
    userName: String,
    email: String,
    tur: String,
    miktar: Number,
    toplamKarbon: Number,
  },
  { collection: "camlar" }
);

const Cam = mongoose.model("Cam", camSchema);

module.exports = Cam;
