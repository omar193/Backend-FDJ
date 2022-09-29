const mongoose = require('mongoose')

const Schema= mongoose.Schema;
const teamSchema= new Schema({
    name : {
        type:String,
        required:true
    },
    thumbnail : {
        type:String,
        required:true,
    },
    players : {
        type:Array,
        requied:true
    }
})
module.exports= mongoose.model('team', teamSchema);