const express = require('express');
const router = express.Router();
const {
    createBooking,
    getBookingsForVendor,
    getBookingsForCustomer,
    updateBookingStatus
} = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('user'), createBooking);
router.get('/my-bookings', protect, authorize('user'), getBookingsForCustomer);
router.get('/vendor-bookings', protect, authorize('vendor'), getBookingsForVendor);
router.put('/:id', protect, authorize('vendor'), updateBookingStatus);

module.exports = router;
