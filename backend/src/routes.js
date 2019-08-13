const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
 
const routes = express.Router();

routes.get('/devs' , (req, res) =>{
    return res.json({ message: `Oi ${req.query.name}`});
});

routes.post('/devs', DevController.store);

routes.post('/devs/:devIds/likes', LikeController.store);
routes.post('/devs/:devIds/dislikes', DislikeController.store);



module.exports = routes;

