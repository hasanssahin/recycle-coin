const Pil = require('../models/pilModel')

const yeniPilEkle = async (req, res, next) => {
    try {
        const eklenecekPil = new Pil(req.body)
        await eklenecekPil.save()
        res.json(eklenecekPil)
    } catch (e) {
        next(e)
    }
}

const adminPilSil=async (req,res,next)=>{
    try {
        const sonuc = await Pil.findByIdAndDelete({ _id: req.params.id })
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
    yeniPilEkle,
    adminPilSil
}