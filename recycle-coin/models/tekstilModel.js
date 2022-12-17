const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tekstilSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'tekstiller'})

const Tekstil=mongoose.model('Tekstil',tekstilSchema)

module.exports=Tekstil