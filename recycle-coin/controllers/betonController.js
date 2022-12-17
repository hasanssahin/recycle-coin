const Beton = require('../models/betonModel')

const yeniBetonEkle = async (req, res, next) => {
    try {
        const eklenecekBeton = new Beton(req.body)
        await eklenecekBeton.save()
        res.json(eklenecekBeton)
    } catch (e) {
        next(e)
    }
}

const adminBetonSil=async (req,res,next)=>{
    try {
        const sonuc = await Beton.findByIdAndDelete({ _id: req.params.id })
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
    yeniBetonEkle,
    adminBetonSil
}