const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plastikSchema = new Schema(
  {
    sha: String,
    userName: String,
    email: String,
    tur: String,
    miktar: Number,
    toplamKarbon: Number,
  },
  { collection: "plastikler" }
);

const Plastik = mongoose.model("Plastik", plastikSchema);

module.exports = Plastik;
