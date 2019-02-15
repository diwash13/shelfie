const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()

const app = express()

const{CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('connected')
    app.listen(4000, () => console.log('Sweetttt'))
}).catch(err => console.log(err))

app.get('/api/inventory', ctrl.getInventory)

app.post('/api/inventory/', ctrl.addInventory)

app.delete('/api/inventory/:id', ctrl.deleteInventory)

app.put('/api/inventory/:id', ctrl.updateInventory)

