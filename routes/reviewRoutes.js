const express = require('express');
const router = express.Router();
const { createReview, getVendorReviews } = require('../controllers/reviewController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('user'), createReview);
router.get('/:vendorId', getVendorReviews);

module.exports = router;
