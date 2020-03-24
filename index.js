const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const homeRoutes = require('./routes/home')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use('/', homeRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => function() {
  console.log(`Server is running on port ${PORT}`)
})
