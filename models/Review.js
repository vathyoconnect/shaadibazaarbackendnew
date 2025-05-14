const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String
    }
}, { timestamps: true });

ReviewSchema.index({ customer: 1, vendor: 1 }, { unique: true });

module.exports = mongoose.model('Review', ReviewSchema);
