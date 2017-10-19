const mongoose = require('mongoose');
const moment = require('moment');

const DungballSchema = new mongoose.Schema({
    short_description: { type: String, required: true, maxlength: 20 },
    long_description: { type: String, required: true  },
    radius: { type: Number, default: 1 },
    color: { type: String, required: true, maxlength: 7 },
    radius: { type: Number, required : true },
    created_at: { type: Date, default: moment() },
    last_rolled: { type: Date, default: moment() },
    last_viewed: { type: Date, default: moment() },
});
const Dungball = mongoose.model('Dungball', DungballSchema);