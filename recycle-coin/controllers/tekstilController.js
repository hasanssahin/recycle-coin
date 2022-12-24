const { TekstilTur } = require("../models/kategoriModel");
const Tekstil = require("../models/tekstilModel");

const yeniTekstilEkle = async (req, res, next) => {
  try {
    const eklenecekTekstilTuru = await TekstilTur.findOne({
      turu: req.body.tur,
    });
    const verilecekKarbonMiktari =
      eklenecekTekstilTuru.karbonDegeri * req.body.miktar;
    const tekstil = {
      sha: req.body.sha,
      userName: req.body.userName,
      email: req.body.email,
      tur: req.body.tur,
      miktar: req.body.miktar,
      toplamKarbon: verilecekKarbonMiktari,
    };
    const yeniTekstilEkle = new Tekstil(tekstil);
    await yeniTekstilEkle.save();
    res.json(yeniTekstilEkle);
  } catch (e) {
    next(e);
  }
};

const tekstilKayitListele = async (req, res, next) => {
  const tumTekstiller = await Tekstil.find({});
  res.json(tumTekstiller);
};

const kisiKayitlari = async (req, res, next) => {
  const kisininTekstilleri = await Tekstil.find({ email: req.params.email });
  res.json(kisininTekstilleri);
};

const kisiKayitSayisi = async (req, res, next) => {
  const sonuc = await Tekstil.aggregate([
    { $match: { sha: req.params.sha } },
    { $count: "toplam" },
  ]);
  res.json(sonuc);
};

const adminTekstilSil = async (req, res, next) => {
  try {
    const sonuc = await Tekstil.findByIdAndDelete({ _id: req.params.id });
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
  yeniTekstilEkle,
  adminTekstilSil,
  tekstilKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
};
