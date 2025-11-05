const mongoose = require('mongoose')

const launcheSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true
    },
    launchDate: {
        type: Date,
        require: true
    },
    mission: {
        type: String,
        required: true
    },
    rocket: {
        type: String,
        required: true
    },
    target: {
        type: String,
    },
    customer: [ String ],
    upcoming: {
        type: Boolean,
        required: true        
    },
    success: {
        type: Boolean,
        required: true,
        default: true
    }

})

// Connect launcheSchema with the launches collection 
module.exports = mongoose.model('Launch', launcheSchema)