const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aluminyumSchema = new Schema(
  {
    sha: String,
    userName: String,
    email: String,
    tur: String,
    miktar: Number,
    toplamKarbon: Number,
  },
  { collection: "aluminyumlar" }
);

const Aluminyum = mongoose.model("Aluminyum", aluminyumSchema);

module.exports = Aluminyum;
