const {
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
} = require("../models/kategoriModel");

const tumKategorileriListele = async (req, res) => {
  const tumKategoriler = await Kategori.find({});
  res.json(tumKategoriler);
};

const tumCamTurleriniListele = async (req, res) => {
  const tumCamTurleri = await CamTur.find({});
  res.json(tumCamTurleri);
};

const tumPlastikTurleriniListele = async (req, res) => {
  const tumPlastikTurleri = await PlastikTur.find({});
  res.json(tumPlastikTurleri);
};

const tumKagitTurleriniListele = async (req, res) => {
  const tumKagitTurleri = await KagitTur.find({});
  res.json(tumKagitTurleri);
};

const tumPilTurleriniListele = async (req, res) => {
  const tumPilTurleri = await PilTur.find({});
  res.json(tumPilTurleri);
};

const tumAluminyumTurleriniListele = async (req, res) => {
  const tumAluminyumTurleri = await AluminyumTur.find({});
  res.json(tumAluminyumTurleri);
};

const tumDemirTurleriniListele = async (req, res) => {
  const tumDemirTurleri = await DemirTur.find({});
  res.json(tumDemirTurleri);
};

const tumAhsapTurleriniListele = async (req, res) => {
  const tumAhsapTurleri = await AhsapTur.find({});
  res.json(tumAhsapTurleri);
};

const tumBetonTurleriniListele = async (req, res) => {
  const tumBetonTurleri = await BetonTur.find({});
  res.json(tumBetonTurleri);
};

const tumTekstilTurleriniListele = async (req, res) => {
  const tumTekstilTurleri = await TekstilTur.find({});
  res.json(tumTekstilTurleri);
};

const tumElektronikTurleriniListele = async (req, res) => {
  const tumElektronikTurleri = await ElektronikTur.find({});
  res.json(tumElektronikTurleri);
};

module.exports = {
  tumKategorileriListele,
  tumCamTurleriniListele,
  tumPlastikTurleriniListele,
  tumKagitTurleriniListele,
  tumPilTurleriniListele,
  tumAluminyumTurleriniListele,
  tumDemirTurleriniListele,
  tumAhsapTurleriniListele,
  tumBetonTurleriniListele,
  tumTekstilTurleriniListele,
  tumElektronikTurleriniListele,
};
