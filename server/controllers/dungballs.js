var mongoose = require('mongoose');
var Dungball = mongoose.model('Dungball');
const moment = require('moment');
const Dungbeetles = require('./dungbeetles');

module.exports = {

    retrieveAll: function (req, res) {
        console.log("retrieve all dungball request");
        Dungball.find({}, function (err, dungballs) {
            if (err) { console.log(err); }
            for (let i = 0; i < dungballs.length; i++) {
                dungballs[i].calc_decay();
            }
            res.json(dungballs);
        });
    },

    retrieveOne: function (req, res) {
        console.log("retrieveon dungball request");
        Dungball.findOne({ _id: req.params.id }, function (err, dungball) {
            if (err) { console.log(err); }
            dungball.calc_decay();
            res.json(dungball);
        });
    },

    create: function (req, res) {
        console.log("dungball create request");
        let dungball = new Dungball();
        dungball.short_desc = req.body.short_desc;
        dungball.long_desc = req.body.long_desc;
        dungball.img_url = req.body.img_url;
        dungball.price = req.body.price;
        dungball.city = req.body.city;
        dungball.state = req.body.state;
        dungball.owner_id = req.body.owner_id;
        dungball.save(function (err) {
            if (err) { console.log(err); }
            //calc_decay not necessary because it's a brand new dungball
            res.json(dungball);
        });
    },

    update: function (req, res) {
        console.log("update dungball request");
        Dungball.findOne({ _id: req.params.id }, function (err, dungball) {
            if (err) { console.log(err); }
            dungball.calc_decay();
            dungball.short_desc = req.body.short_desc;
            dungball.long_desc = req.body.long_desc;
            dungball.img_url = req.body.img_url;
            dungball.radius = req.body.radius;
            dungball.color = req.body.color;
            dungball.price = req.body.price;
            dungball.city = req.body.city;
            dungball.state = req.body.state;
            dungball.updated_at = moment();
            dungball.save(function (err) {
                if (err) { console.log(err); }
                res.json(dungball);
            });
        });
    },

    destroy: function (req, res) {
        console.log("destroy dungball request");
        Dungball.remove({ _id: req.params.id }, function (err) {
            if (err) { console.log(err); }
        });
    },

}