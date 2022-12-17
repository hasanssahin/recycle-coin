const Demir = require('../models/demirModel')

const yeniDemirEkle = async (req, res, next) => {
    try {
        const eklenecekDemir = new Demir(req.body)
        await eklenecekDemir.save()
        res.json(eklenecekDemir)
    } catch (e) {
        next(e)
    }
}

const adminDemirSil=async (req,res,next)=>{
    try {
        const sonuc = await Demir.findByIdAndDelete({ _id: req.params.id })
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
    yeniDemirEkle,
    adminDemirSil
}