<<<<<<< HEAD
const express = require("express")
const app = express()
const logger = require('morgan')
const routes = require('./routes/index')
app.use(express.static(__dirname + '/public'))
app.use(logger('dev'))
app.use('/', routes)
// Register middleware
app.use(express.json())

//add middleware for handlebars here
app.set('view engine', 'hbs')
const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})

app.use(express.urlencoded())
//Boiler if using handlebars
const methodOverride = require("method-override")
app.use(methodOverride('_method'))
app.set('view engine', 'hbs')
// route handler

app.get('/users', (req, res)=> {
    userApi.getAllUsers()
    .then(users => {
        res.render("users/users", {listofuser:users})
    })
})

app.post('/users', (req, res)=> {
    userApi.createNewUser(req.body)
    .then(() => {
        res.render('users/created')
    })
})
app.get('/users/:id',(req,res)=>{
    userApi.getUsersById(req.params.id)
    .then(user =>{
        accountApi.getAllAccountsByUserId(user._id)
        .then(accounts =>{
        res.render('users/user', {user, accounts})
        })
    })
})


app.delete('/users/:id',(req,res)=>{
    userApi.deleteUsersById(req.params.id)
    .then(user =>{
        res.render('users/deleted')
    })
})

app.put('/users/:id',(req,res)=>{
    userApi.updateUserById(req.params.id, req.body)
    .then(user =>{
        res.render('users/updated')
    })
})
=======
>>>>>>> parent of 1d7a021... added folders
