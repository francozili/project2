const mongoose = require('../db/connection.js')

const entreeSchema = new mongoose.Schema({
    entreeName: String,
    directions: [String],
    picture: String,
    ingridents: [String],
    nutritionFacts: String
})
let entreeCollection = mongoose.model('Entree', entreeSchema)

// show all entree
const allEntree = () => {
    return entreeCollection.find()
}
// create new entree
const newEntree = (newentree) => {
    return entreeCollection.create(newentree)
}
// show single entree
const oneEntree= (newentree) => {
    return entreeCollection.findById(newentree)
}
// update single entree
const updateEntree = (entreeid, newid) => {
    return entreeCollection.findByIdAndUpdate(entreeid, newid)
}
// delete single entree
const deleteEntree = (entreeid) => {
    return entreeCollection.findByIdAndRemove(entreeid)
}
const deleteAllEntree = (entree) => {
    return entreeCollection.deleteMany(entree)
}

module.exports = {
    allEntree,
    newEntree,
    oneEntree,
    updateEntree,
    deleteEntree,
    deleteAllEntree
}