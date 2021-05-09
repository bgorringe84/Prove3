const express = require('express');

const showRoomController = require('../controllers/showRoom');

const router = express.Router();

//middleware
router.get('/', showRoomController.getCars);
router.get('/cars/:carNumber', showRoomController.getDetail);

module.exports = router;
