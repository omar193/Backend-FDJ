const mongoose = require('mongoose')

const Schema= mongoose.Schema;
const playerSchema= new Schema({
    name : {
        type:String,
        required:true
    },
    position : {
        type:String,
        required:true,
    },
    thumbnail : {
        type:String,
        requied:true
    },
    signin : {
        type:Object,
        requied:true
    },
    born : {
        type:Date,
        requied:true
    }
})
module.exports= mongoose.model('player', playerSchema);