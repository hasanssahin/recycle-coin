const mongoose = require('mongoose')
const Schema = mongoose.Schema

const betonSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'betonlar'})

const Beton=mongoose.model('Beton',betonSchema)

module.exports=Beton