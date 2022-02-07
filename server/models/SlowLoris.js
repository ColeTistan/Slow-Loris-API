const mongoose = require('mongoose');
const slowLorisSchema = new mongoose.Schema({
    common_name: {
        type: String,
        required: true
    },
    scientific_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    distribution: {
        type: Array,
        required: true
    },
    conservation_status: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: false
    },
    wikipedia_url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('SlowLoris', slowLorisSchema)