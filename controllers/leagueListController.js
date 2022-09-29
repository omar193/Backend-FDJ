const leagueList = require('../models/League')
const fs = require("fs");


exports.getListLeagues = async (req, res, next) => {
    try {
        const{name} =req.query
        const leagueResult = await leagueList.find({name: new RegExp(name, "i") } )
        res.send(leagueResult);
    } catch (e) {
        console.log(e)
    }

}



