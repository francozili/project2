// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Category = new Schema({
   name: String,
   city: String,
   contact: Number,
   about: String,
   portfolio: [{
       type: Schema.Types.ObjectId,
       ref: "Recepie"
   }]
})

module.exports = mongoose.model('Category', Category)