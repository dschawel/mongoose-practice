// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
let creatorSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    image: String,
    birthyear: Date,
    deathyear: Date
})
// TODO: Create Piece Schema
let pieceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    originCountry: {
        type: String,
        requied: true
    },
    museum: [{type: mongoose.Schema.Types.ObjectId, ref: 'museum'}],
    creator: [creatorSchema]
})
// HINT: include a creator field for using the Creator schema

// TODO: Use Piece schema to create Piece model

// TODO: Export Piece Model
module.exports = mongoose.model('piece', pieceSchema)

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
