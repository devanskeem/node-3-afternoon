const express = require('express')
require('dotenv').config()
const massive = require('massive')
const app = express()
const pc = require('./product_controller')
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env
massive(CONNECTION_STRING)
    .then(database => {
        console.log('database set')
        app.set('db', database)
        console.log(app.use)

    })
    .catch(err => {
        console.log(err)
    })

app.get('/api/products', pc.getAll)
app.get('/api/product/:id', pc.getOne)
app.put('/api/products/:id', pc.update)
app.post('/api/products', pc.create)
app.delete('/api/products/:id', pc.getAll)
// app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(SERVER_PORT, () => {console.log(`running on port: ${SERVER_PORT}`)})