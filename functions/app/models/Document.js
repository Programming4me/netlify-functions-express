var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DocumentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    products: {

    }
});

module.exports = mongoose.model('Document', DocumentSchema);