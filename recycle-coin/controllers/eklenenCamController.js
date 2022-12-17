const Cam = require('../models/eklenenCamModel')
const User = require('../models/userModel')
const createError = require('http-errors')

const yeniCamEkle = async (req, res, next) => {
    try {
        const eklenecekCam = new Cam(req.body)
        await eklenecekCam.save()
        res.json(eklenecekCam)
    } catch (e) {
        next(e)
    }
}



module.exports = {
    yeniCamEkle
}