const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

let products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' }
];

// Endpoint para obtener todos los productos
app.get('/products', (req, res) => {
    res.json(products);
});

// Endpoint para agregar un nuevo producto
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
