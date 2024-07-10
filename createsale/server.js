const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json());

let sales = [
    { id: 1, totalPrice: 100.0 },
    { id: 2, totalPrice: 200.0 }
];

// Endpoint para obtener todas las ventas
app.get('/sales', (req, res) => {
    res.json(sales);
});

// Endpoint para agregar una nueva venta
app.post('/sales', (req, res) => {
    const newSale = {
        id: sales.length + 1,
        totalPrice: req.body.totalPrice
    };
    sales.push(newSale);
    res.status(201).json(newSale);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
