const express = require('express');
const router = express.Router();
const leagueList = require('../models/League')
const leagueListController = require('../controllers/leagueListController');

router.get('/getListLeagues/?', leagueListController.getListLeagues)


module.exports = router;