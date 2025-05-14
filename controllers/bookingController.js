const Booking = require('../models/Booking');
const Vendor = require('../models/Vendor');

exports.createBooking = async (req, res) => {
    try {
        const { vendorId, eventDate, message } = req.body;
        const vendorExists = await Vendor.findById(vendorId);
        if (!vendorExists) return res.status(404).json({ message: 'Vendor not found' });

        const booking = await Booking.create({
            customer: req.user._id,
            vendor: vendorId,
            eventDate,
            message
        });
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookingsForVendor = async (req, res) => {
    try {
        const bookings = await Booking.find({ vendor: req.user._id }).populate('customer', 'name email');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookingsForCustomer = async (req, res) => {
    try {
        const bookings = await Booking.find({ customer: req.user._id }).populate('vendor', 'businessName');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateBookingStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const booking = await Booking.findById(id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });

        booking.status = status;
        await booking.save();
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
