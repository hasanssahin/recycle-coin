const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')
const {yeniDemirEkle,adminDemirSil}=require('../controllers/demirController')

router.post('/',yeniDemirEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminDemirSil)

module.exports = router