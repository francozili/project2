let express = require('express')
let router = express.Router()
const catController = require('../controllers/catController')
// Example Route
// router.get('/', someController.index)

//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that triggers the donut controller index function
// router.get('/', catController.index)


//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that triggers the donut controller new function
// router.get('/new', catController.new)

// router.get("/cart",catController.cart)

//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that triggers the donut controller show function
// router.get('/:id', catController.show)

//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that triggers the donut controller create function

// router.post('/',catController.create)

//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that triggers the donut controller edit function

// router.get("/:id/edit",catController.edit)

// router.get('/:id/edit',catController.edit)
//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that triggers the donut controller update function
// router.put("/:id",catController.update)
// Create a PATCH update route "/:id" that triggers the donut controller update function
// router.get('/:id',catController.put)


// router.put("/:id/buy",catController.buy)

//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that triggers the donut controller delete function
// router.delete('/:id',catController.delete)

module.exports = router