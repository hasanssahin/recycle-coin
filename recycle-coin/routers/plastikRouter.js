const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniPlastikEkle,adminPlastikSil}=require('../controllers/plastikController')

router.post('/',yeniPlastikEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminPlastikSil)

module.exports = router