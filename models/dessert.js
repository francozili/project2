const mongoose = require('../db/connection.js')
const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const dessertSchema = new mongoose.Schema({
        dessertName: String,
        directions: [String],
        picture: String,
        ingridents: [String],
        nutritionFacts: String
})

let dessertCollection = mongoose.model('Dessert', dessertSchema)


module.exports = {
    dessertCollection
}
