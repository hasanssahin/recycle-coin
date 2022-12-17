const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniElektronikEkle,adminElektronikSil}=require('../controllers/elektronikController')

router.post('/',yeniElektronikEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminElektronikSil)

module.exports = router