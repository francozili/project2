const mongoose = require('../db/connection')
const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const appetizerSchema = new mongoose.Schema({
    appetizerName: String,
    directions: [String],
    picture: String,
    ingridents: [String],
    nutritionFacts: String
})
// export the donut model with module.exports
let appetizerCollection = mongoose.model('Appetizer', appetizerSchema)


module.exports = {
    appetizerCollection
}
