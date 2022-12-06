const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    birth: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    team: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Athlete", athleteSchema, "athletes")