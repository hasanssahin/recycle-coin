const Aluminyum = require('../models/aluminyumModel')

const yeniAluminyumEkle = async (req, res, next) => {
    try {
        const eklenecekAluminyum = new Aluminyum(req.body)
        await eklenecekAluminyum.save()
        res.json(eklenecekAluminyum)
    } catch (e) {
        next(e)
    }
}

const adminAluminyumSil=async (req,res,next)=>{
    try {
        const sonuc = await Aluminyum.findByIdAndDelete({ _id: req.params.id })
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
    yeniAluminyumEkle,
    adminAluminyumSil
}