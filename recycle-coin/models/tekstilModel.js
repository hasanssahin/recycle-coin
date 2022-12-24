const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tekstilSchema = new Schema(
  {
    sha: String,
    userName: String,
    email: String,
    tur: String,
    miktar: Number,
    toplamKarbon: Number,
  },
  { collection: "tekstiller" }
);

const Tekstil = mongoose.model("Tekstil", tekstilSchema);

module.exports = Tekstil;
