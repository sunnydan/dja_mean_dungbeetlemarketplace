var dungbeetles = require('../controllers/dungbeetles.js');
var dungballs = require('../controllers/dungballs.js');
const path = require("path");

module.exports = function (app) {

    app.get('/dungbeetles', (req, res, next) => {
        /* retrieve the dungbeetles from the database */
        /* and respond with the dungbeetles using 'res.json(dungbeetles)' */
    });

    app.get('/dungbeetles/:id', (req, res, next) => {
        /* retrieve the product from the database (find the product by the req.params.id)  */
        /* and respond with the product using 'res.json(product)' */
    });

    app.post('/dungbeetles', (req, res, next) => {
        /* create a product, and respond with a success of failed message */
    });

    app.put('/dungbeetles/:id', (req, res, next) => {
        /* update the product (find the product by the req.params.id) */
        /* update that product with the posted product found through the req.body */
        /* and respond with the updated version of the product */
    });

    app.delete('/dungbeetles/:id', (req, res, next) => {
        /* delete the product (find the product by the req.params.id) */
        /* and respond with a success of failed message */
    });

    app.get('/dungballs', (req, res, next) => {
        /* retrieve the dungballs from the database */
        /* and respond with the dungballs using 'res.json(dungballs)' */
    });

    app.get('/dungballs/:id', (req, res, next) => {
        /* retrieve the product from the database (find the product by the req.params.id)  */
        /* and respond with the product using 'res.json(product)' */
    });

    app.post('/dungballs', (req, res, next) => {
        /* create a product, and respond with a success of failed message */
    });

    app.put('/dungballs/:id', (req, res, next) => {
        /* update the product (find the product by the req.params.id) */
        /* update that product with the posted product found through the req.body */
        /* and respond with the updated version of the product */
    });

    app.delete('/dungballs/:id', (req, res, next) => {
        /* delete the product (find the product by the req.params.id) */
        /* and respond with a success of failed message */
    });

    app.use((req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
