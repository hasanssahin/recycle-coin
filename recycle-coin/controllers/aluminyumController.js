const Aluminyum = require("../models/aluminyumModel");
const { AluminyumTur } = require("../models/kategoriModel");

const yeniAluminyumEkle = async (req, res, next) => {
  try {
    const eklenecekAluminyumTuru = await AluminyumTur.findOne({
      turu: req.body.tur,
    });
    const verilecekKarbonMiktari =
      eklenecekAluminyumTuru.karbonDegeri * req.body.miktar;
    const aluminyum = {
      sha: req.body.sha,
      userName: req.body.userName,
      email: req.body.email,
      tur: req.body.tur,
      miktar: req.body.miktar,
      toplamKarbon: verilecekKarbonMiktari,
    };
    const yeniAluminyumEkle = new Aluminyum(aluminyum);
    await yeniAluminyumEkle.save();
    res.json(yeniAluminyumEkle);
  } catch (e) {
    next(e);
  }
};

const aluminyumKayitListele = async (req, res, next) => {
  const tumAluminyumlar = await Aluminyum.find({});
  res.json(tumAluminyumlar);
};

const kisiKayitlari = async (req, res, next) => {
  const kisininAluminyumları = await Aluminyum.find({
    email: req.params.email,
  });
  res.json(kisininAluminyumları);
};

const kisiKayitSayisi = async (req, res, next) => {
  const sonuc = await Aluminyum.aggregate([
    { $match: { sha: req.params.sha } },
    { $count: "toplam" },
  ]);
  res.json(sonuc);
};

const adminAluminyumSil = async (req, res, next) => {
  try {
    const sonuc = await Aluminyum.findByIdAndDelete({ _id: req.params.id });
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
  yeniAluminyumEkle,
  adminAluminyumSil,
  aluminyumKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
};
