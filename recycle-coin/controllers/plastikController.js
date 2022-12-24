const { PlastikTur } = require("../models/kategoriModel");
const Plastik = require("../models/plastikModel");

const yeniPlastikEkle = async (req, res, next) => {
  try {
    const eklenecekPlastikTuru = await PlastikTur.findOne({
      turu: req.body.tur,
    });
    const verilecekKarbonMiktari =
      eklenecekPlastikTuru.karbonDegeri * req.body.miktar;
    const plastik = {
      sha: req.body.sha,
      userName: req.body.userName,
      email: req.body.email,
      tur: req.body.tur,
      miktar: req.body.miktar,
      toplamKarbon: verilecekKarbonMiktari,
    };
    const yeniPlastikEkle = new Plastik(plastik);
    await yeniPlastikEkle.save();
    res.json(yeniPlastikEkle);
  } catch (e) {
    next(e);
  }
};

const plastikKayitListele = async (req, res, next) => {
  const tumPlastikler = await Plastik.find({});
  res.json(tumPlastikler);
};

const kisiKayitlari = async (req, res, next) => {
  const kisininPlastikleri = await Plastik.find({ email: req.params.email });
  res.json(kisininPlastikleri);
};

const kisiKayitSayisi = async (req, res, next) => {
  const sonuc = await Plastik.aggregate([
    { $match: { sha: req.params.sha } },
    { $count: "toplam" },
  ]);
  res.json(sonuc);
};

const adminPlastikSil = async (req, res, next) => {
  try {
    const sonuc = await Plastik.findByIdAndDelete({ _id: req.params.id });
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
  yeniPlastikEkle,
  adminPlastikSil,
  plastikKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
};
