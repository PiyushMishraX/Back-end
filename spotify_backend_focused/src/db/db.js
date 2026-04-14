const mongoose = require('mongoose')

async function connectDB() {

    try {

        mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected successfully');
        
        
    } catch (error) {
        console.log('Database connection: ', error);

        // process.exit() // search on google to know what it is , a good developerr always finds what is something
        
    }
    
}

module.exports = connectDB;