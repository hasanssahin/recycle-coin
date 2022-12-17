const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ahsapSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'ahsaplar'})

const Ahsap=mongoose.model('Ahsap',ahsapSchema)

module.exports=Ahsap