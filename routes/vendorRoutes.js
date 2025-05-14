const express = require('express');
const router = express.Router();
const { createVendorProfile, getVendorProfile, getAllVendors } = require('../controllers/vendorController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('vendor'), createVendorProfile);
router.get('/me', protect, authorize('vendor'), getVendorProfile);
router.get('/', protect, authorize('admin'), getAllVendors);

module.exports = router;
