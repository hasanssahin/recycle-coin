const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniKagitEkle,adminKagitSil}=require('../controllers/kagitController')

router.post('/',yeniKagitEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminKagitSil)

module.exports = router