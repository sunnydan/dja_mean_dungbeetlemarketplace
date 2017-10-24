var mongoose = require('mongoose');
var Dungbeetle = mongoose.model('Dungbeetle');
const moment = require('moment');
const bcrypt = require('bcrypt');
const session = require('express-session');

module.exports = {

    retrieveAll: function (req, res) {
        Dungbeetle.find({}, function (err, dungbeetles) {
            if (err) { console.log(err); }
            res.json(dungbeetles);
        });
    },

    retrieveOne: function (req, res) {
        console.log('retrieveOne request');
        Dungbeetle.findOne({ _id: req.params.id }, function (err, dungbeetle) {
            if (err) { console.log(err); }
            res.json(dungbeetle);
        });
    },

    retrieveLoggedIn: function (req, res) {
        console.log('retrieveLoggedIn request');
        if (!req.session.beetleid) {

        }
        Dungbeetle.findOne({ _id: req.session.beetleid }, function (err, dungbeetle) {
            if (err || !dungbeetle) {
                console.log(err);
            } else {
                console.log(dungbeetle);
                res.json(dungbeetle);
            }
        });
    },

    create: function (req, res) {
        console.log("create request");
        console.log(req.body);
        let dungbeetle = new Dungbeetle();
        dungbeetle.name = req.body.name;
        dungbeetle.email = req.body.email;
        dungbeetle.color = req.body.color;
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            console.log(hash);
            dungbeetle.password = hash;
            console.log(dungbeetle);
            dungbeetle.save((err) => {
                if (err) { console.log(err); }
                console.log(dungbeetle);
                res.json(dungbeetle)
            });
        });
    },

    login: function (req, res) {
        console.log("login request");
        console.log(req.body);
        Dungbeetle.findOne({ email: req.body.email }, function (err, dungbeetle) {
            if (err || !dungbeetle) {
                console.log(err);
            } else {
                bcrypt.compare(req.body.password, dungbeetle.password, (err, isMatch) => {
                    if (err || !isMatch) {
                        console.log(err);
                    } else {
                        console.log("User & Password Match!");
                        req.session.beetleid = dungbeetle._id;
                        dungbeetle = { 'name': dungbeetle.name };
                        res.json(dungbeetle);
                    }
                });
            }
        });
    },

    logout: function (req, res) {
        console.log("logout request");
        req.session.beetleid = null;
        res.json({});
    },

    update: function (req, res) {
        Dungbeetle.findOne({ _id: req.params.id }, function (err, dungbeetle) {
            if (err) { console.log(err); }
            dungbeetle.name = req.body['name'];
            dungbeetle.color = req.body['color'];
            dungbeetle.dungballs = req.body['dungballs'];
            dungbeetle.save(function (err) {
                if (err) { console.log(err); }
                res.json(dungbeetle)
            });
        });
    },

    destroy: function (req, res) {
        Dungbeetle.remove({ _id: req.params.id }, function (err) {
            if (err) { console.log(err); }
        });
    }

}