const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const connect = require('./config/dbConn')
require('dotenv').config();
const mongoose = require('mongoose')
const morgan= require ('morgan')

const PORT = process.env.PORT || 3500;

app.use(cors());

connect();
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.json())


app.use('/', require('./routes/getListLeagues'));


app.use('/', require('./routes/getListTeams'));

app.use('/', require('./routes/getListPlayers'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});