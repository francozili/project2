const express = require("express")
const app = express()
const methodOverride = require("method-override")
// Register middleware
app.use(express.json())

//add middleware for handlebars here
app.set('view engine', 'hbs')
const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})

app.get