const Beton = require("../models/betonModel");
const { BetonTur } = require("../models/kategoriModel");

const yeniBetonEkle = async (req, res, next) => {
  try {
    const eklenecekBetonTuru = await BetonTur.findOne({ turu: req.body.tur });
    const verilecekKarbonMiktari =
      eklenecekBetonTuru.karbonDegeri * req.body.miktar;
    const beton = {
      sha: req.body.sha,
      userName: req.body.userName,
      email: req.body.email,
      tur: req.body.tur,
      miktar: req.body.miktar,
      toplamKarbon: verilecekKarbonMiktari,
    };
    const yeniBetonEkle = new Beton(beton);
    await yeniBetonEkle.save();
    res.json(yeniBetonEkle);
  } catch (e) {
    next(e);
  }
};

const betonKayitListele = async (req, res, next) => {
  const tumBetonlar = await Beton.find({});
  res.json(tumBetonlar);
};

const kisiKayitlari = async (req, res, next) => {
  const kisininBetonlari = await Beton.find({ email: req.params.email });
  res.json(kisininBetonlari);
};

const kisiKayitSayisi = async (req, res, next) => {
  const sonuc = await Beton.aggregate([
    { $match: { sha: req.params.sha } },
    { $count: "toplam" },
  ]);
  res.json(sonuc);
};

const adminBetonSil = async (req, res, next) => {
  try {
    const sonuc = await Beton.findByIdAndDelete({ _id: req.params.id });
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
  yeniBetonEkle,
  adminBetonSil,
  betonKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
};
