const {Kategori,CamTur, PlastikTur}=require('../models/kategoriModel')

const tumKategorileriListele = async (req, res) => {
    const tumKategoriler = await Kategori.find({})
    res.json(tumKategoriler)
}

const tumCamTurleriniListele = async (req, res) => {
    const tumCamTurleri = await CamTur.find({})
    res.json(tumCamTurleri)
}

const tumPlastikTurleriniListele = async (req, res) => {
    const tumPlastikTurleri = await PlastikTur.find({})
    res.json(tumPlastikTurleri)
}

module.exports={
    tumKategorileriListele,
    tumCamTurleriniListele,
    tumPlastikTurleriniListele
}