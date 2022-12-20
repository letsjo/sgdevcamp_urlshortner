const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema);