const express = require('express');
const router = express.Router();
const playersListController = require('../controllers/playersListController');

router.get('/getListPlayers/:id', playersListController.getListPlayers)


module.exports = router;