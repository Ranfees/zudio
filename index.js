const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.use(express.static('static'));
app.use('/style', express.static(__dirname + '/style'));


const zudioRoutes = require('./routes/routes')
app.use('/',zudioRoutes)

app.listen(port)