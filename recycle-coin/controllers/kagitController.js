const Kagit = require('../models/kagitModel')

const yeniKagitEkle = async (req, res, next) => {
    try {
        const eklenecekKagit = new Kagit(req.body)
        await eklenecekKagit.save()
        res.json(eklenecekKagit)
    } catch (e) {
        next(e)
    }
}

const adminKagitSil=async (req,res,next)=>{
    try {
        const sonuc = await Kagit.findByIdAndDelete({ _id: req.params.id })
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
    yeniKagitEkle,
    adminKagitSil
}