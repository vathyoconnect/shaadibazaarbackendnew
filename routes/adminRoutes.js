const express = require('express');
const router = express.Router();
const {
    getAdminStats,
    getAllUsers,
    getAllBookings,
    getAllReviews
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/stats', protect, authorize('admin'), getAdminStats);
router.get('/users', protect, authorize('admin'), getAllUsers);
router.get('/bookings', protect, authorize('admin'), getAllBookings);
router.get('/reviews', protect, authorize('admin'), getAllReviews);

module.exports = router;
