const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let clients = [
    { id: 1, name: 'Cristian' },
    { id: 2, name: 'Roberto' }
];

// Endpoint para obtener todos los clientes
app.get('/clients', (req, res) => {
    res.json(clients);
});

// Endpoint para agregar un nuevo cliente
app.post('/clients', (req, res) => {
    const newClient = {
        id: clients.length + 1,
        name: req.body.name
    };
    clients.push(newClient);
    res.status(201).json(newClient);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
