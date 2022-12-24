const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betonSchema = new Schema(
  {
    sha: String,
    userName: String,
    email: String,
    tur: String,
    miktar: Number,
    toplamKarbon: Number,
  },
  { collection: "betonlar" }
);

const Beton = mongoose.model("Beton", betonSchema);

module.exports = Beton;
