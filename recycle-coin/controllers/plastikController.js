const Plastik = require('../models/plastikModel')

const yeniPlastikEkle = async (req, res, next) => {
    try {
        const eklenecekPlastik = new Plastik(req.body)
        await eklenecekPlastik.save()
        res.json(eklenecekPlastik)
    } catch (e) {
        next(e)
    }
}

const adminPlastikSil=async (req,res,next)=>{
    try {
        const sonuc = await Plastik.findByIdAndDelete({ _id: req.params.id })
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
    yeniPlastikEkle,
    adminPlastikSil
}