var dungbeetles = require('../controllers/dungbeetles.js');
var dungballs = require('../controllers/dungballs.js');
const path = require("path");

module.exports = function (app) {

    app.get('/dungbeetles', dungbeetles.retrieveAll);

    app.get('/dungbeetles/:id', dungbeetles.retrieveOne);

    app.get('/dungbeetles/l/oggedin', dungbeetles.retrieveLoggedIn);

    app.post('/dungbeetles', dungbeetles.create);

    app.post('/dungbeetles/login', dungbeetles.login);

    app.get('/dungbeetles/l/ogout', dungbeetles.logout);

    app.put('/dungbeetles/:id', dungbeetles.update);

    app.delete('/dungbeetles/:id', dungbeetles.destroy);

    app.get('/dungballs', dungballs.retrieveAll);

    app.get('/dungballs/:id', dungballs.retrieveOne);

    app.post('/dungballs', dungballs.create);

    app.put('/dungballs/:id', dungballs.update);

    app.delete('/dungballs/:id', dungballs.destroy);

    app.use((req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
