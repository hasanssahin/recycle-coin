const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kagitSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'kagitlar'})

const Kagit=mongoose.model('Kagit',kagitSchema)

module.exports=Kagit