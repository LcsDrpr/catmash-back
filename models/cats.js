const mongoose = require('mongoose');

//cat schema
const catSchema = mongoose.Schema({
    url: String,
    score: Number,
});

const catModel = mongoose.model('cats', catSchema);

module.exports = catModel;
