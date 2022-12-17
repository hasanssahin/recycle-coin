const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniBetonEkle,adminBetonSil}=require('../controllers/betonController')

router.post('/',yeniBetonEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminBetonSil)

module.exports = router