const mongoose = require('mongoose');
const moment = require('moment');

const DungBeetleSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 20 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    hexcolor: { type: String, required: true, maxlength: 7 },
    birthday: { type: Date, default: moment() },
    updated_at: { type: Date, default: moment() },
    dungballs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dungball' }]
});
const DungBeetle = mongoose.model('DungBeetle', DungBeetleSchema);