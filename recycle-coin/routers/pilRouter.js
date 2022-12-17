const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniPilEkle,adminPilSil}=require('../controllers/pilController')

router.post('/',yeniPilEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminPilSil)

module.exports = router