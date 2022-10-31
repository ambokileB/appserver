const mongoose = require('mongoose');

const settledBetchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

exports.SettledBet = mongoose.model('SettledBet', settledBetchema);
