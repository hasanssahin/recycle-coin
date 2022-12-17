const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const {yeniOrganikEkle,adminOrganikSil}=require('../controllers/organikController')

router.post('/',yeniOrganikEkle)
router.delete('/:id',[authMiddleware,adminMiddleware],adminOrganikSil)

module.exports = router