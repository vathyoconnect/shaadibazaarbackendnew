const Vendor = require('../models/Vendor');

exports.createVendorProfile = async (req, res) => {
    try {
        const existing = await Vendor.findOne({ user: req.user._id });
        if (existing) return res.status(400).json({ message: 'Profile already exists' });

        const vendor = await Vendor.create({ ...req.body, user: req.user._id });
        res.status(201).json(vendor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getVendorProfile = async (req, res) => {
    try {
        const vendor = await Vendor.findOne({ user: req.user._id }).populate('user', 'name email');
        if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
        res.json(vendor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find().populate('user', 'name email');
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
