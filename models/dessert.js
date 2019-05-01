const mongoose = require('../db/connection.js')
const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const dessertSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    herbId: ObjectId,
    oilId: ObjectId,
})

let dessertCollection = mongoose.model('Dessert', dessertSchema)


module.exports = {
    dessertCollection
}
