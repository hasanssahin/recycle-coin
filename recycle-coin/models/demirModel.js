const mongoose = require('mongoose')
const Schema = mongoose.Schema

const demirSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'demirler'})

const Demir=mongoose.model('Demir',demirSchema)

module.exports=Demir