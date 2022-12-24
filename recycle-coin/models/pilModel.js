const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pilSchema = new Schema(
  {
    sha: String,
    userName: String,
    email: String,
    tur: String,
    miktar: Number,
    toplamKarbon: Number,
  },
  { collection: "piller" }
);

const Pil = mongoose.model("Pil", pilSchema);

module.exports = Pil;
