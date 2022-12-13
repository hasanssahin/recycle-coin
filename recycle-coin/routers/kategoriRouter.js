const router = require('express').Router()
const {tumKategorileriListele}=require('../controllers/kategoriController')

router.get('/',tumKategorileriListele)

module.exports=router
