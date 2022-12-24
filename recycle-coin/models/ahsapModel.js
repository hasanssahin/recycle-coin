const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ahsapSchema = new Schema(
  {
    sha: String,
    userName: String,
    email: String,
    tur: String,
    miktar: Number,
    toplamKarbon: Number,
  },
  { collection: "ahsaplar" }
);

const Ahsap = mongoose.model("Ahsap", ahsapSchema);

module.exports = Ahsap;
