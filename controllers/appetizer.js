const mongoose = require('../db/connection.js')
const dessert = require('./dessert.js')
const entree = require('./entree.js')
const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const appetizerSchema = new mongoose.Schema({
    appetizerName: String,
    directions: String,
    picture: String,
    ingridents: [String]
})
let appetizerCollection = mongoose.model('Appetizer', appetizerSchema)

// show all appetizer
const allAppetizer = () => {
    return appetizerCollection.find()
}
// create new ailment
const newAppetizer = (newappetizer) => {
    return appetizerCollection.create(newappetizer)
}
// show single ailment
const oneAppetizer = (newappetizer) => {
    return appetizerCollection.findById(newappetizer)
}
// update single ailment
const updateAppetizer = (appetizerid, newid) => {
    return appetizerCollection.findByIdAndUpdate(appetizerid, newid)
}
// delete single ailment
const deleteAppetizer = (appetizerid) => {
    return appetizerCollection.findByIdAndRemove(appetizerid)
}
const deleteAllAppetizer = (appetizers) => {
    return appetizerCollection.deleteMany(appetizers)
}

module.exports = {
    allAppetizer,
    newAppetizer,
    oneAppetizer,
    updateAppetizer,
    deleteAppetizer,
    deleteAllAppetizer
}

