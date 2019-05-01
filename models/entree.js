const mongoose = require('../db/connection.js')
const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const entreeSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    herbId: ObjectId,
    oilId: ObjectId,
})

let entreeCollection = mongoose.model('Entree', entreeSchema)


module.exports = {
    entreeCollection
}
