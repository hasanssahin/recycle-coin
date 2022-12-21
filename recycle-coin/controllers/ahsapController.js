const Ahsap = require('../models/ahsapModel')

const yeniAhsapEkle = async (req, res, next) => {
    try {
        const yeniAhsapEkle = new Ahsap(req.body)
        await yeniAhsapEkle.save()
        res.json(yeniAhsapEkle)
    } catch (e) {
        next(e)
    }
}

const ahsapKayitListele=async (req, res, next) => {
    const tumAhsaplar = await Ahsap.find({})
    res.json(tumAhsaplar)
}

const kisiKayitlari=async (req, res, next) => {
    const kisininAhsaplari = await Ahsap.find({email:req.params.email})
    res.json(kisininAhsaplari)
}

const kisiKayitSayisi=async (req, res, next) => {
    const sonuc=await Ahsap.aggregate([
        {$match:{sha:req.params.sha}},
        {$count:"toplam"}
    ])
    res.json(sonuc)
}

const adminAhsapSil=async (req,res,next)=>{
    try {
        const sonuc = await Ahsap.findByIdAndDelete({ _id: req.params.id })
        if (sonuc) {
            return res.json({
                mesaj: "Veri Silindi"
            })
        } else {
            next(e)
        }
    } catch (e) {
        next(e)
    }
}


module.exports = {
    yeniAhsapEkle,
    adminAhsapSil,
    ahsapKayitListele,
    kisiKayitlari,
    kisiKayitSayisi
}