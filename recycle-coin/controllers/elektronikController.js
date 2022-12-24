const Elektronik = require("../models/elektronikModel");
const { ElektronikTur } = require("../models/kategoriModel");

const yeniElektronikEkle = async (req, res, next) => {
  try {
    const eklenecekElektronikTuru = await ElektronikTur.findOne({
      turu: req.body.tur,
    });
    const verilecekKarbonMiktari =
      eklenecekElektronikTuru.karbonDegeri * req.body.miktar;
    const elektronik = {
      sha: req.body.sha,
      userName: req.body.userName,
      email: req.body.email,
      tur: req.body.tur,
      miktar: req.body.miktar,
      toplamKarbon: verilecekKarbonMiktari,
    };
    const yeniElektronikEkle = new Elektronik(elektronik);
    await yeniElektronikEkle.save();
    res.json(yeniElektronikEkle);
  } catch (e) {
    next(e);
  }
};

const elektronikKayitListele = async (req, res, next) => {
  const tumElektronik = await Elektronik.find({});
  res.json(tumElektronik);
};

const kisiKayitlari = async (req, res, next) => {
  const kisininElektronikleri = await Elektronik.find({
    email: req.params.email,
  });
  res.json(kisininElektronikleri);
};

const kisiKayitSayisi = async (req, res, next) => {
  const sonuc = await Elektronik.aggregate([
    { $match: { sha: req.params.sha } },
    { $count: "toplam" },
  ]);
  res.json(sonuc);
};

const adminElektronikSil = async (req, res, next) => {
  try {
    const sonuc = await Elektronik.findByIdAndDelete({ _id: req.params.id });
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
  yeniElektronikEkle,
  adminElektronikSil,
  elektronikKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
};
