const User = require('../models/User');
const Vendor = require('../models/Vendor');
const Booking = require('../models/Booking');
const Review = require('../models/Review');

exports.getAdminStats = async (req, res) => {
    try {
        const usersCount = await User.countDocuments({ role: 'user' });
        const vendorsCount = await User.countDocuments({ role: 'vendor' });
        const bookingsCount = await Booking.countDocuments();
        const reviewsCount = await Review.countDocuments();

        res.json({
            users: usersCount,
            vendors: vendorsCount,
            bookings: bookingsCount,
            reviews: reviewsCount
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('customer vendor');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('customer vendor');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
