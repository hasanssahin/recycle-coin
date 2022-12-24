const { PilTur } = require("../models/kategoriModel");
const Pil = require("../models/pilModel");

const yeniPilEkle = async (req, res, next) => {
  try {
    const eklenecekPilTuru = await PilTur.findOne({ turu: req.body.tur });
    const verilecekKarbonMiktari =
      eklenecekPilTuru.karbonDegeri * req.body.miktar;
    const pil = {
      sha: req.body.sha,
      userName: req.body.userName,
      email: req.body.email,
      tur: req.body.tur,
      miktar: req.body.miktar,
      toplamKarbon: verilecekKarbonMiktari,
    };
    const yeniPilEkle = new Pil(pil);
    await yeniPilEkle.save();
    res.json(yeniPilEkle);
  } catch (e) {
    next(e);
  }
};

const pilKayitListele = async (req, res, next) => {
  const tumPiller = await Pil.find({});
  res.json(tumPiller);
};

const kisiKayitlari = async (req, res, next) => {
  const kisininPilleri = await Pil.find({ email: req.params.email });
  res.json(kisininPilleri);
};

const kisiKayitSayisi = async (req, res, next) => {
  const sonuc = await Pil.aggregate([
    { $match: { sha: req.params.sha } },
    { $count: "toplam" },
  ]);
  res.json(sonuc);
};

const adminPilSil = async (req, res, next) => {
  try {
    const sonuc = await Pil.findByIdAndDelete({ _id: req.params.id });
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
  yeniPilEkle,
  adminPilSil,
  pilKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
};
