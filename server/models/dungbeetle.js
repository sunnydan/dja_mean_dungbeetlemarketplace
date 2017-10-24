const mongoose = require('mongoose');
const moment = require('moment');

const DungbeetleSchema = new mongoose.Schema({
    //beetle information
    name: { type: String, required: true, maxlength: 20 },
    color: { type: String, required: true, maxlength: 7 },
    //account information
    email: { type: String, required: true, unique: [true, "A Dungbeetle is already registered that email"] },
    password: { type: String, required: true },
    created_at: { type: Date, default: moment() },
    updated_at: { type: Date, default: moment() },
});

const Dungbeetle = mongoose.model('Dungbeetle', DungbeetleSchema);
console.log("Dungbeetle model loaded");