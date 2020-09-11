const path = require('path')
const express = require('express');
const hbs = require('express-handlebars')

const app = express();

const restaurantsRouter = require('./routes/restaurants') 
const indexRouter  = require('./routes')

const logger = require('./middleware/logger')

//template engines
app.engine('hbs', hbs({extname : 'hbs'}))
app.set('view engine','hbs')

//middleware
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))

//custom middleware
app.use(logger)

//Route
app.use('/apis/restaurants',restaurantsRouter)

app.use('/',indexRouter)



app.listen(5000,()=> {
    console.log('Listening to port 5000')
})