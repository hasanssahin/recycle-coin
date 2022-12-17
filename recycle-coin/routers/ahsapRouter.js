const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniAhsapEkle,adminAhsapSil}=require('../controllers/ahsapController')

router.post('/',yeniAhsapEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminAhsapSil)

module.exports = router