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
    adminAhsapSil
}