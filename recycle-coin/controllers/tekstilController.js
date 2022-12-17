const Tekstil = require('../models/tekstilModel')

const yeniTekstilEkle = async (req, res, next) => {
    try {
        const eklenecekTekstil = new Tekstil(req.body)
        await eklenecekTekstil.save()
        res.json(eklenecekTekstil)
    } catch (e) {
        next(e)
    }
}

const adminTekstilSil=async (req,res,next)=>{
    try {
        const sonuc = await Tekstil.findByIdAndDelete({ _id: req.params.id })
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
    yeniTekstilEkle,
    adminTekstilSil
}