const Review = require('../models/Review');
const Vendor = require('../models/Vendor');

exports.createReview = async (req, res) => {
    try {
        const { vendorId, rating, comment } = req.body;

        const vendor = await Vendor.findById(vendorId);
        if (!vendor) return res.status(404).json({ message: 'Vendor not found' });

        const review = await Review.create({
            customer: req.user._id,
            vendor: vendorId,
            rating,
            comment
        });

        res.status(201).json(review);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'You already reviewed this vendor' });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

exports.getVendorReviews = async (req, res) => {
    try {
        const vendorId = req.params.vendorId;
        const reviews = await Review.find({ vendor: vendorId }).populate('customer', 'name');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
