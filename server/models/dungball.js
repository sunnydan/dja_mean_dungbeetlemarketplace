const mongoose = require('mongoose');
const moment = require('moment');
require('./dungbeetle.js');
const Dungbeetle = mongoose.model('Dungbeetle');

const DungballSchema = new mongoose.Schema({
    //practical information
    short_desc: { type: String, required: true, maxlength: 20 },
    long_desc: { type: String, required: true },
    img_url: { type: String, default: "https://i.imgur.com/5SHgU79.jpg" },
    radius: { type: Number, default: 1 },
    color: { type: String, default: "#8b5413", maxlength: 7 },
    price: { type: Number, required: true },
    //location information
    city: { type: String, required: true },
    state: { type: String, required: true, maxlength: 2 },
    //technical information
    owner_id: { type: String, required: true },
    created_at: { type: Date, default: moment() },
    updated_at: { type: Date, default: moment() },
    last_viewed: { type: Date, default: moment() },
});

DungballSchema.methods.calc_decay = function () {
    let last = moment(this.last_viewed).unix();
    this.last_viewed = moment();
    let now = moment(this.last_viewed).unix();
    let diff = now - last;
    let decay = Math.floor(diff);
    this.radius = this.radius - decay;
    if (this.radius < 1) {
        this.radius = 1;
    }
    this.save((err) => {
        if (err) { console.log(err); }
    });
}

DungballSchema.methods.getDungbeetle = function () {
    Dungbeetle.findOne({ _id: this.owner_id }, function (err, dungbeetle) {
        if (err) {
            console.log(err);
        } else {
            return dungbeetle;
        }
    });
}

const Dungball = mongoose.model('Dungball', DungballSchema);
console.log("Dungball model loaded");