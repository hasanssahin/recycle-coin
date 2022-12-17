const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('@hapi/joi')
const createError = require('http-errors')

const eklenenCamSchema=new Schema({
    sha:String,
    email:String,
    tur:String,
    miktar:Number,
    verilenKarbon:Number
},{ collection: 'camlar'})

const Cam=mongoose.model('Cam',eklenenCamSchema)

module.exports=Cam