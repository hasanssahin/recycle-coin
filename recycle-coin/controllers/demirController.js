const Demir = require("../models/demirModel");
const { DemirTur } = require("../models/kategoriModel");

const yeniDemirEkle = async (req, res, next) => {
  try {
    const eklenecekDemirTuru = await DemirTur.findOne({ turu: req.body.tur });
    const verilecekKarbonMiktari =
      eklenecekDemirTuru.karbonDegeri * req.body.miktar;
    const demir = {
      sha: req.body.sha,
      userName: req.body.userName,
      email: req.body.email,
      tur: req.body.tur,
      miktar: req.body.miktar,
      toplamKarbon: verilecekKarbonMiktari,
    };
    const yeniDemirEkle = new Demir(demir);
    await yeniDemirEkle.save();
    res.json(yeniDemirEkle);
  } catch (e) {
    next(e);
  }
};

const demirKayitListele = async (req, res, next) => {
  const tumDemirler = await Demir.find({});
  res.json(tumDemirler);
};

const kisiKayitlari = async (req, res, next) => {
  const kisininDemirleri = await Demir.find({ email: req.params.email });
  res.json(kisininDemirleri);
};

const kisiKayitSayisi = async (req, res, next) => {
  const sonuc = await Demir.aggregate([
    { $match: { sha: req.params.sha } },
    { $count: "toplam" },
  ]);
  res.json(sonuc);
};

const adminDemirSil = async (req, res, next) => {
  try {
    const sonuc = await Demir.findByIdAndDelete({ _id: req.params.id });
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
  yeniDemirEkle,
  adminDemirSil,
  demirKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
};
