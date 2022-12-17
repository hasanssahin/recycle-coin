const Cam = require('../models/camModel')

const yeniCamEkle = async (req, res, next) => {
    try {
        const eklenecekCam = new Cam(req.body)
        await eklenecekCam.save()
        res.json(eklenecekCam)
    } catch (e) {
        next(e)
    }
}

const adminCamSil=async (req,res,next)=>{
    try {
        const sonuc = await Cam.findByIdAndDelete({ _id: req.params.id })
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
    yeniCamEkle,
    adminCamSil
}