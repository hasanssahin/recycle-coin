const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kategoriSchema = new Schema({}, { collection: "kategoriler" });

kategoriSchema.methods.toJSON = function () {
  const kategori = this.toObject();
  delete kategori._id;
  return kategori;
};

const Kategori = mongoose.model("Kategoriler", kategoriSchema);

const camTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "cam_turleri" }
);

const CamTur = mongoose.model("CamTur", camTurleriSchema);

const plastikTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "plastik_turleri" }
);

const PlastikTur = mongoose.model("PlastikTur", plastikTurleriSchema);

const kagitTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "kagit_turleri" }
);

const KagitTur = mongoose.model("KagitTur", kagitTurleriSchema);

const pilTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "pil_turleri" }
);

const PilTur = mongoose.model("PilTur", pilTurleriSchema);

const aluminyumTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "aluminyum_turleri" }
);

const AluminyumTur = mongoose.model("AluminyumTur", aluminyumTurleriSchema);

const demirTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "demir_turleri" }
);

const DemirTur = mongoose.model("DemirTur", demirTurleriSchema);

const ahsapTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "ahsap_turleri" }
);

const AhsapTur = mongoose.model("AhsapTur", ahsapTurleriSchema);

const betonTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "beton_turleri" }
);

const BetonTur = mongoose.model("BetonTur", betonTurleriSchema);

const tekstilTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "tekstil_turleri" }
);

const TekstilTur = mongoose.model("TekstilTur", tekstilTurleriSchema);

const elektronikTurleriSchema = new Schema(
  {
    karbonDegeri: Number,
  },
  { collection: "elektronik_turleri" }
);

const ElektronikTur = mongoose.model("ElektronikTur", elektronikTurleriSchema);

module.exports = {
  Kategori,
  CamTur,
  PlastikTur,
  KagitTur,
  PilTur,
  AluminyumTur,
  DemirTur,
  AhsapTur,
  BetonTur,
  TekstilTur,
  ElektronikTur,
};
