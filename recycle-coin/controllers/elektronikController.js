const Elektronik = require('../models/elektronikModel')

const yeniElektronikEkle = async (req, res, next) => {
    try {
        const eklenecekElektronik = new Elektronik(req.body)
        await eklenecekElektronik.save()
        res.json(eklenecekElektronik)
    } catch (e) {
        next(e)
    }
}

const adminElektronikSil=async (req,res,next)=>{
    try {
        const sonuc = await Elektronik.findByIdAndDelete({ _id: req.params.id })
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
    yeniElektronikEkle,
    adminElektronikSil
}