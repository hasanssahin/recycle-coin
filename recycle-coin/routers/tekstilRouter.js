const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniTekstilEkle,adminTekstilSil}=require('../controllers/tekstilController')

router.post('/',yeniTekstilEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminTekstilSil)

module.exports = router