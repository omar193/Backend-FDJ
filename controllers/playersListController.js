const TeamList = require('../models/Team')
const PlayersList = require('../models/Player')
const fs = require("fs");


exports.getListPlayers = async (req, res, next) => {
    try {

        const selectedTeam = await TeamList.findById(req.params.id)
        let players = selectedTeam.players.filter(player => player)

        let getMatched = await PlayersList.find({ "_id": players })
        getMatched ? res.send(getMatched) : res.send([])

    } catch {
        res.send('Check your Team Id !')
    }


}