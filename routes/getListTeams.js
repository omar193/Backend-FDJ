const express = require('express');
const router = express.Router();
const teamListController = require('../controllers/teamListController');

router.get('/getListTeams/:id', teamListController.getListTeams)


module.exports = router;