const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    date: { type: String, required: true },
    input: { type: String, required: true },
    readyToEat: Boolean
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log