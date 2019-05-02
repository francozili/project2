const mongoose = require('../db/connection.js')
const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const entreeSchema = new mongoose.Schema({
    entreeName: String,
    directions: [String],
    picture: String,
    ingridents: [String],
    nutritionFacts: String
})

let entreeCollection = mongoose.model('Entree', entreeSchema)


module.exports = {
    entreeCollection
}
