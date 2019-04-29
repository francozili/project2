const Category = require("../models/Category");

const checkoutController = {
 // INDEX
 index: function(req, res) {
   Category.find().then(Cats => {
     res.render("cat/index", { Cats });
   });
 },

 // NEW
 new: function(req, res) {
   res.render("cat/new");
 },

 // SHOW
 show: function(req, res) {
   Category.findById(req.params.id).then(Cat => {
     res.render("cat/show", { Cat });
   });
 },

 // CREATE
 create: function(req, res) {
   console.log(req);
   Category.create(req.body).then(() => res.redirect("/"));
 },

 // UPDATE
//     Donut.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
//       res.redirect("/" + req.params.id);
//     });
//   },

 // DELETE
 delete: function(req, res) {
   Category.findByIdAndRemove(req.params.id).then(() => {
     res.redirect("/");
   });
 }

};


// EXPORTS
module.exports = checkoutController;