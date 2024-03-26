
const mongoose= require('mongoose');
require('dotenv').config();

exports.connect= () => {
    try{
        mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected with database");
    }
    catch(error) {
        console.log(error)
        console.log("Error in connection with database")
    }
}