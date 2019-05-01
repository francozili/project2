const mongoose = require('../db/connection.js')

const dessertSchema = new mongoose.Schema({
    dessertName: String,
    directions: [String],
    picture: String,
    ingridents: [String]
})

let dessertCollection = mongoose.model('Dessert', dessertSchema)

// show all dessert
const allDessert = () => {
    return dessertCollection.find()
}
// create new dessert
const newDessert = (newdessert) => {
    return dessertCollection.create(newdessert)
}
// show single dessert
const oneDessert = (newdessert) => {
    return dessertCollection.findById(newdessert)
}
// update single dessert
const updateDessert = (dessertid, newid) => {
    return dessertCollection.findByIdAndUpdate(dessertid, newid)
}
// delete single dessert
const deleteDesert = (dessertid) => {
    return dessertCollection.findByIdAndRemove(dessertid)
}
const deleteAllDessert = (dessert) => {
    return dessertCollection.deleteMany(dessert)
}


// export the controller with module.exports
module.exports = {
    allDessert,
    newDessert,
    oneDessert,
    updateDessert,
    deleteDesert,
    deleteAllDessert,
}