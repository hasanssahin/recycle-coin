const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniAluminyumEkle,adminAluminyumSil}=require('../controllers/aluminyumController')

router.post('/',yeniAluminyumEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminAluminyumSil)

module.exports = router