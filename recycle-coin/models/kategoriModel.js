const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kategoriSchema=new Schema({
    turu:{
        type:String
    }
},{collection:'kategoriler'})

kategoriSchema.methods.toJSON=function(){
    const kategori=this.toObject()
    delete kategori._id
    return kategori
}

const Kategoriler=mongoose.model('Kategoriler',kategoriSchema)

module.exports=Kategoriler