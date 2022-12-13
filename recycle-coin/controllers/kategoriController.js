const Kategoriler=require('../models/kategoriModel')

const tumKategorileriListele = async (req, res) => {
    const tumKategoriler = await Kategoriler.find({})
    res.json(tumKategoriler)
}

module.exports={
    tumKategorileriListele
}