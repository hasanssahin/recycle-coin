const router = require('express').Router()
const {tumKategorileriListele,tumCamTurleriniListele,tumPlastikTurleriniListele}=require('../controllers/kategoriController')

router.get('/',tumKategorileriListele)
router.get('/camTurleri',tumCamTurleriniListele)
router.get('/plastikTurleri',tumPlastikTurleriniListele)

module.exports=router
