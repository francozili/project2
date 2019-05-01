const mongoose = require('../db/connection')
const ObjectId = mongoose.Schema.Types.ObjectId

// create schemas:
const appetizerSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    uses: Array,
    price: Number,
    inStock: Boolean,
})
// export the donut model with module.exports
let appetizerCollection = mongoose.model('Appetizer', appetizerSchema)


module.exports = {
    appetizerCollection
}
