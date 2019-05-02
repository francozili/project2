// lets us know we are using express
const express = require('express')

// this invokes the function of express
const app = express()

// for use in forms since those are only POST & GET
const methodOverride = require('method-override')
// imported apis & schemas from each model
const appetizerApi = require('./controllers/appetizer')
const dessertApi = require('./controllers/dessert')
const entreeApi = require('./controllers/entree')

app.use(express.urlencoded({ extended: true }))

// body parser using JSON
app.use(express.json())

// for use in forms since those are only POST & GET
app.use(methodOverride('_method'))

// to link css
app.use('/public', express.static("public"))

// to link image folder
app.use('/images', express.static('images'))

// to link fonts
app.use('/fonts', express.static('fonts'))

// to run handlebars
app.set('view engine', 'hbs')


// renders home page for entire website
app.get('/', (req, res) => {
    res.render('home')
})

// list index of all appetizer
app.get('/appetizer', (req, res) => {
    appetizerApi.allAppetizer()
    .then(appetizer => {
        console.log(appetizerApi.allAppetizer(req.body))
        res.render('appetizer/index', { appetizer })
    })
})

// this gets the new appetizer form page to render
app.get('/appetizer/new', (req, res) => {
        res.render('appetizer/new')
    })
// gets the new appetizer form inputs and adds it to appetizer index
app.post('/appetizer', (req, res) => {
    appetizerApi.newAppetizer(req.body)
    .then(() => {
        res.redirect('/appetizer')
    })
})

app.get('/appetizer/:id/update', (req, res) => {
    appetizerApi.oneAppetizer(req.params.id).then(appi => {
        console.log(appi)
            res.render("appetizer/update", { appi });
    })
})

app.put('/appetizer/:id', (req, res) => {
    console.log("\n\n",req.params);
    appetizerApi.updateAppetizer(req.params.id, req.body)
        .then(() => {
            res.redirect(`/appetizer/${req.params.id}`)
        })
})
// show single appetizer
app.get('/appetizer/:id', (req, res) => {
    appetizerApi.oneAppetizer(req.params.id).then(appetizer => {
        res.render('appetizer/show', { appetizer })
    })
})

// app.put('/appetizer/:id', (req, res) => {
//     appetizerApi.findByIdAndUpdate(req.params.id, req.body.post, { new: true }).then(() => {
//          res.redirect("/" + req.params.id);
//        })

// )





//delete single appetizer
app.delete('/appetizer/:id', (req, res) => {
    appetizerApi.deleteAppetizer(req.params.id).then(() => {
        res.redirect('/appetizer')
    })
})

//delete all appetizer 
app.delete('/appetizer', (req, res) => {
    appetizerApi.deleteAllAppetizer(req.params.id).then(() => {
        res.redirect('/appetizer')
    })
})

//update single appetizer
// app.get('/appetizer/:id/edit', (req, res) => {
//     appetizerApi.oneAppetizer(req.params.id)
//         .then(appetizer => {
//             res.render('appetizer/update', { appetizer })
//         })
// })



// list/ index of all dessert
app.get('/dessert', (req, res) => {
    dessertApi.allDessert().then(dessert => {
        console.log(dessertApi.allDessert())
        res.render('dessert/index', { dessert })
    })
})

// create new dessert
app.get('/dessert/new', (req, res) => {
    res.render('dessert/new')
})

app.post('/dessert', (req, res) => {
    dessertApi.newDessert(req.body)
    .then(() => {
        res.redirect('/dessert')
    })
})

// show single dessert
app.get('/dessert/:id', (req, res) => {
    dessertApi.oneDessert(req.params.id).then(dessert => {
        res.render('dessert/show', { dessert })
    })
})

//delete single dessert
app.delete('/dessert/:id', (req, res) => {
    dessertApi.deleteDessert(req.params.id).then(() => {
        res.redirect('/dessert')
    })
})
//delete all dessert
app.delete('/dessert', (req, res) => {
    dessertApi.deleteAllDessert(req.params.id).then(() => {
        res.redirect('/dessert')
    })
})

//update single dessert
app.get('/dessert/:id/edit', (req, res) => {
    dessertApi.oneDessert(req.params.id)
        .then(dessert => {
            res.render('dessert/edit', { dessert })
        })
})

app.put('/dessert/:id', (req, res) => {
    dessertApi.updateDessert(req.params.id, req.body)
        .then(() => {
            res.redirect(`/dessert/${req.params.id}`)
        })
})


// list/ index of all entree
app.get('/entree', (req, res) => {
    entreeApi.allEntree().then(entree => {
        console.log(entreeApi.allEntree())
        res.render('entree/index', { entree })
    })
})

// create new entree
app.get('/entree/new', (req, res) => {
    res.render('entree/new')
})
app.post('/entree', (req, res) => {
    entreeApi.newEntree(req.body)
    .then(() => {
        res.redirect('/entree')
    })
})

// show single entree
app.get('/entree/:id', (req, res) => {
    entreeApi.oneEntree(req.params.id).then(entree => {
        res.render('entree/show', { entree })
    })
})

//delete single entree
app.delete('/entree/:id', (req, res) => {
    entreeApi.deleteEntree(req.params.id).then(() => {
        res.redirect('/entree')
    })
})
//delete all entree
app.delete('/entree', (req, res) => {
    entreeApi.deleteAllEntree(req.params.id).then(() => {
        res.redirect('/entree')
    })
})
//update single entree
app.get('/entree/:id/edit', (req, res) => {
    entreeApi.oneEntree(req.params.id)
    .then(entree => {
        res.render('entree/edit', { entree })
    })
})

app.put('/entree/:id', (req, res) => {
    entreeApi.updateEntree(req.params.id, req.body)
        .then(() => {
            res.redirect(`/entree/${req.params.id}`)
        })
})



let PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
