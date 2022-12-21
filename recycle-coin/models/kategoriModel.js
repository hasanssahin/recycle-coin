const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kategoriSchema=new Schema({
},{collection:'kategoriler'})

kategoriSchema.methods.toJSON=function(){
    const kategori=this.toObject()
    delete kategori._id
    return kategori
}

const Kategori=mongoose.model('Kategoriler',kategoriSchema)

const camTurleriSchema=new Schema({
},{collection:'cam_turleri'})

const CamTur=mongoose.model('CamTur',camTurleriSchema)

const plastikTurleriSchema=new Schema({
},{collection:'plastik_turleri'})

const PlastikTur=mongoose.model('PlastikTur',plastikTurleriSchema)

module.exports={Kategori,CamTur,PlastikTur}