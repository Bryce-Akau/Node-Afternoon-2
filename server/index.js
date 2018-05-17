const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const dotenv = require('dotenv');
dotenv.config();
const products_controller = require('./products_controller')

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.post('/api/product', products_controller.create)
app.get('/api/products', products_controller.getAll)
app.get('/api/product/:id', products_controller.getOne)
app.put('/api/product/:id', products_controller.update)
app.delete('/api/product/:id', products_controller.delete)


app.listen(PORT, () => {
    console.log(`${PORT} people dancing in the moonlight`)
})

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
})
