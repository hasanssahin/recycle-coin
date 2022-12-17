const Kategori=require('../models/kategoriModel')

const tumKategorileriListele = async (req, res) => {
    const tumKategoriler = await Kategori.find({})
    res.json(tumKategoriler)
}

module.exports={
    tumKategorileriListele
}