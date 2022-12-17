const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aluminyumSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'aluminyumlar'})

const Aluminyum=mongoose.model('Aluminyum',aluminyumSchema)

module.exports=Aluminyum