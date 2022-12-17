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

module.exports=Kategori