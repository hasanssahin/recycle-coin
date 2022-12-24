const Kagit = require("../models/kagitModel");
const { KagitTur } = require("../models/kategoriModel");

const yeniKagitEkle = async (req, res, next) => {
  try {
    const eklenecekKagitTuru = await KagitTur.findOne({ turu: req.body.tur });
    const verilecekKarbonMiktari =
      eklenecekKagitTuru.karbonDegeri * req.body.miktar;
    const kagit = {
      sha: req.body.sha,
      userName: req.body.userName,
      email: req.body.email,
      tur: req.body.tur,
      miktar: req.body.miktar,
      toplamKarbon: verilecekKarbonMiktari,
    };
    const yeniKagitEkle = new Kagit(kagit);
    await yeniKagitEkle.save();
    res.json(yeniKagitEkle);
  } catch (e) {
    next(e);
  }
};

const kagitKayitListele = async (req, res, next) => {
  const tumKagitlar = await Kagit.find({});
  res.json(tumKagitlar);
};

const kisiKayitlari = async (req, res, next) => {
  const kisininKagitlari = await Kagit.find({ email: req.params.email });
  res.json(kisininKagitlari);
};

const kisiKayitSayisi = async (req, res, next) => {
  const sonuc = await Kagit.aggregate([
    { $match: { sha: req.params.sha } },
    { $count: "toplam" },
  ]);
  res.json(sonuc);
};

const adminKagitSil = async (req, res, next) => {
  try {
    const sonuc = await Kagit.findByIdAndDelete({ _id: req.params.id });
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
  yeniKagitEkle,
  adminKagitSil,
  kagitKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
};
