const mongoose = require('mongoose')
const Schema = mongoose.Schema

const elektronikSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'elektronikler'})

const Elektronik=mongoose.model('Elektronik',elektronikSchema)

module.exports=Elektronik