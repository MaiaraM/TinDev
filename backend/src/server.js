const express = require('express');
const mongose =  require('mongoose');
const cors =  require('cors');
const routes = require('./routes');

const server = express();

mongose.connect('mongodb+srv://react:react@cluster0-slrkv.mongodb.net/react8?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);