const Organik = require('../models/organikModel')

const yeniOrganikEkle = async (req, res, next) => {
    try {
        const eklenecekOrganik = new Organik(req.body)
        await eklenecekOrganik.save()
        res.json(eklenecekOrganik)
    } catch (e) {
        next(e)
    }
}

const adminOrganikSil=async (req,res,next)=>{
    try {
        const sonuc = await Organik.findByIdAndDelete({ _id: req.params.id })
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
    yeniOrganikEkle,
    adminOrganikSil
}