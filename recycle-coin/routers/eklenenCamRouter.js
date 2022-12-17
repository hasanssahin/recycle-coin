const router = require('express').Router()
const {yeniCamEkle}=require('../controllers/eklenenCamController')

router.post('/',yeniCamEkle)

module.exports = router