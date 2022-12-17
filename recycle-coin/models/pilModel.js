const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pilSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'piller'})

const Pil=mongoose.model('Pil',pilSchema)

module.exports=Pil