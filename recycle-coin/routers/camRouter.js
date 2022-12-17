const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniCamEkle,adminCamSil}=require('../controllers/camController')

router.post('/',yeniCamEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminCamSil)

module.exports = router