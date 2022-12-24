const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const elektronikSchema = new Schema(
  {
    sha: String,
    userName: String,
    email: String,
    tur: String,
    miktar: Number,
    toplamKarbon: Number,
  },
  { collection: "elektronikler" }
);

const Elektronik = mongoose.model("Elektronik", elektronikSchema);

module.exports = Elektronik;
