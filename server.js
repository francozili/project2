// const express = require("express")
// const app = express()
// const routes = require('./routes/index')
// app.use(express.static(__dirname + '/public'))
// app.use('/', routes)
// // Register middleware
// app.use(express.json())

// //add middleware for handlebars here
// app.set('view engine', 'hbs')

// app.use(express.urlencoded())
// //Boiler if using handlebars
// const methodOverride = require("method-override")
// app.use(methodOverride('_method'))
// app.set('view engine', 'hbs')
// // route handler

// app.get('/', (req, res)=> {
    
//         res.render("home")
//     })

// const PORT = process.env.PORT || 3000 

//     app.listen(PORT, () => {
//         console.log(`App is listening on PORT ${PORT}`)
//     })

// lets us know we are using express
const express = require('express')

// this invokes the function of express
const app = express()

// for use in forms since those are only POST & GET
const methodOverride = require('method-override')
// logger
const logger = require('morgan')
// imported apis & schemas from each model
const appetizerApi = require('./controllers/appetizer')
const desertApi = require('./controllers/desert')
const entreeApi = require('./controllers/entree')

//= =====================
// MIDDLEWARE
//= =====================
// body parser(req.body) for classic encoding if false
app.use(express.urlencoded({ extended: true }))

// body parser using JSON
app.use(express.json())

// for use in forms since those are only POST & GET
app.use(methodOverride('_method'))

// to link css
app.use('/public', express.static("public"))

// to link image folder
app.use('/images', express.static('images'))

// to run handlebars
app.set('view engine', 'hbs')

// Logger provides extra information in our Node console about each request being made.
app.use(logger('dev'))

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

// show single appetizer
app.get('/appetizer/:id', (req, res) => {
    appetizerApi.oneAppetizer(req.params.id).then(appetizer => {
        res.render('appetizer/show', { appetizer })
    })
})

//delete single appetizer
app.delete('/appetizer/:id', (req, res) => {
    appetizerApi.deleteAppetizer(req.params.id).then(() => {
        res.redirect('/appetizer')
    })
})

//delete all herbs
app.delete('/herbs', (req, res) => {
    herbApi.deleteAllHerbs(req.params.id).then(() => {
        res.redirect('/herbs')
    })
})

//update single herb
app.get('/herbs/:id/edit', (req, res) => {
    herbApi.oneHerb(req.params.id)
        .then(herb => {
            res.render('herbs/edit', { herb })
        })
})

app.put('/herbs/:id', (req, res) => {
    herbApi.updateHerb(req.params.id, req.body)
        .then(() => {
            res.redirect(`/herbs/${req.params.id}`)
        })
})

//= =====================================================
// OILS
//= =====================================================

// list/ index of all oils
app.get('/oils', (req, res) => {
    oilApi.allOils().then(oils => {
        console.log(oilApi.allOils())
        res.render('oils/index', { oils })
    })
})

// create new oil
app.get('/oils/new', (req, res) => {
    res.render('oils/new')
})

app.post('/oils', (req, res) => {
    oilApi.newOil(req.body)
    .then(() => {
        res.redirect('/oils')
    })
})

// show single oil
app.get('/oils/:id', (req, res) => {
    oilApi.oneOil(req.params.id).then(oil => {
        res.render('oils/show', { oil })
    })
})

//delete single oil
app.delete('/oils/:id', (req, res) => {
    oilApi.deleteOil(req.params.id).then(() => {
        res.redirect('/oils')
    })
})
//delete all oils
app.delete('/oils', (req, res) => {
    oilApi.deleteAllOils(req.params.id).then(() => {
        res.redirect('/oils')
    })
})

//update single oil
app.get('/oils/:id/edit', (req, res) => {
    oilApi.oneOil(req.params.id)
        .then(oil => {
            res.render('oils/edit', { oil })
        })
})

app.put('/oils/:id', (req, res) => {
    oilApi.updateOil(req.params.id, req.body)
        .then(() => {
            res.redirect(`/oils/${req.params.id}`)
        })
})

//= =====================================================
// SUPPLEMENTS
//= =====================================================

// list/ index of all supplements
app.get('/sups', (req, res) => {
    supApi.allSups().then(sups => {
        console.log(supApi.allSups())
        res.render('sups/index', { sups })
    })
})

// create new supplement
app.get('/sups/new', (req, res) => {
    res.render('sups/new')
})
app.post('/sups', (req, res) => {
    supApi.newSup(req.body)
    .then(() => {
        res.redirect('/sups')
    })
})

// show single supplement
app.get('/sups/:id', (req, res) => {
    supApi.oneSup(req.params.id).then(sup => {
        res.render('sups/show', { sup })
    })
})

//delete single supplement
app.delete('/sups/:id', (req, res) => {
    supApi.deleteSup(req.params.id).then(() => {
        res.redirect('/sups')
    })
})
//delete all supplements
app.delete('/sups', (req, res) => {
    supApi.deleteAllSups(req.params.id).then(() => {
        res.redirect('/sups')
    })
})
//update single supplement
app.get('/sups/:id/edit', (req, res) => {
    supApi.oneSup(req.params.id)
    .then(sup => {
        res.render('sups/edit', { sup })
    })
})

app.put('/sups/:id', (req, res) => {
    supApi.updateSup(req.params.id, req.body)
        .then(() => {
            res.redirect(`/sups/${req.params.id}`)
        })
})

//= =====================================================
// AILMENTS
//= =====================================================

// list/ index of all ailments
app.get('/ailments', (req, res) => {
    ailApi.allAilments().then(ailments => {
        // console.log(ailApi.allAilments())
        res.render('ailments/index', { ailments })
    })
})

// create new ailment
app.get('/ailments/new', (req, res) => {
    res.render('ailments/new')
})

app.post('/ailments', (req, res) => {
    ailApi.newAilment(req.body).then(() => {
        res.redirect('/ailments')
    })
})

// show single ailment
app.get('/ailments/:id', (req, res) => {
    ailApi.oneAilment(req.params.id).then(ailment => {
        res.render('ailments/show', { ailment })
    })
})

//delete single ailment
app.delete('/ailments/:id', (req, res) => {
    ailApi.deleteAilment(req.params.id).then(() => {
        res.redirect('/ailments')
    })
})
//delete all ailment
app.delete('/ailments', (req, res) => {
    ailApi.deleteAllAilments(req.params.id).then(() => {
        res.redirect('/ailments')
    })
})

//update single ailment
app.get('/ailments/:id/edit', (req, res) => {
    ailApi.oneAilment(req.params.id)
    .then(ailment => {
        res.render('ailments/edit', { ailment })
    })
})

app.put('/ailments/:id', (req, res) => {
    ailApi.updateAilment(req.params.id, req.body)
        .then(() => {
            res.redirect(`/ailments/${req.params.id}`)
        })
})

let PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('working')
})
