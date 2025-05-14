const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    serviceType: {
        type: String,
        required: true,
        enum: ['photography', 'venue', 'decoration', 'catering', 'makeup', 'other']
    },
    businessName: {
        type: String,
        required: true
    },
    description: String,
    location: String,
    contactNumber: String,
    priceRange: String,
    images: [String]
}, { timestamps: true });

module.exports = mongoose.model('Vendor', VendorSchema);
