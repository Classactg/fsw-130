const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Movie Blueprint
const movieSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    gere: {
        type: String,
        required: true
    },
    releaseYear: Number
})

moudule.exports = mongoose.model("Movie", movieSchema)