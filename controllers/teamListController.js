const TeamList = require('../models/Team')
const leagueList = require('../models/League')
const fs = require("fs");


exports.getListTeams = async (req, res, next) => {
    try {
      
        const selectedLeague = await leagueList.findById(req.params.id)
        let teams = selectedLeague.teams.filter(team => team)

        let getMatched = await TeamList.find({ "_id": teams })

        getMatched ? res.send(getMatched) : res.send([])
    } catch {
        res.send('Check your League Id !')
    }

}

