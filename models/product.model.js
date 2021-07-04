const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required'
    },
    category: {
        type: String,
        required: 'This field is required'

    },
    amount: {
        type: String,
        required: 'This field is required'

    }
})

// custom validation for email


mongoose.model('Product', productSchema);