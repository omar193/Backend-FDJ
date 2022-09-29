const mongoose = require('mongoose')

const Schema= mongoose.Schema;
const leagueSchema= new Schema({
    name : {
        type:String,
        required:true
    },
    sport : {
        type:String,
        required:true,
    },
    teams : {
        type:Array,
        required:true
    }
})
module.exports= mongoose.model('league', leagueSchema);