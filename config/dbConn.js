const mongoose = require('mongoose')
async function connectDB() {
    try{
        await mongoose.connect(process.env.DATABSE_URI, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
          console.log('Successfully connected to Db ')
    }catch {
        console.error('failed')
    }
}

module.exports=connectDB