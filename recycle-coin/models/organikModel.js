const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organikSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'organikler'})

const Organik=mongoose.model('Organik',organikSchema)

module.exports=Organik