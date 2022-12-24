const Cam = require("../models/camModel");
const { CamTur } = require("../models/kategoriModel");

const yeniCamEkle = async (req, res, next) => {
  try {
    const eklenecekCamTuru = await CamTur.findOne({ turu: req.body.tur });
    const verilecekKarbonMiktari =
      eklenecekCamTuru.karbonDegeri * req.body.miktar;
    const cam = {
      sha: req.body.sha,
      userName: req.body.userName,
      email: req.body.email,
      tur: req.body.tur,
      miktar: req.body.miktar,
      toplamKarbon: verilecekKarbonMiktari,
    };
    const yeniCamEkle = new Cam(cam);
    await yeniCamEkle.save();
    res.json(yeniCamEkle);
  } catch (e) {
    next(e);
  }
};

const camKayitListele = async (req, res, next) => {
  const tumCamlar = await Cam.find({});
  res.json(tumCamlar);
};

const kisiKayitlari = async (req, res, next) => {
  const kisininCamlari = await Cam.find({ email: req.params.email });
  res.json(kisininCamlari);
};

const kisiKayitSayisi = async (req, res, next) => {
  const sonuc = await Cam.aggregate([
    { $match: { sha: req.params.sha } },
    { $count: "toplam" },
  ]);
  res.json(sonuc);
};

const adminCamSil = async (req, res, next) => {
  try {
    const sonuc = await Cam.findByIdAndDelete({ _id: req.params.id });
    if (sonuc) {
      return res.json({
        mesaj: "Veri Silindi",
      });
    } else {
      next(e);
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  yeniCamEkle,
  adminCamSil,
  camKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
};
