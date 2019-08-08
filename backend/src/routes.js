const express = require('express');
const routes = express.Router();

routes.get('/' , (req, res) =>{
    return res.json({ message: `Oi ${req.query.name}`});
});

routes.post('/', (req, res) => {
    return res.send(`Name recebido`)
});

routes.post('')

module.exports = routes;

