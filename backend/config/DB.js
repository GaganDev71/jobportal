const mongoose = require("mongoose");

let DB  = async ()=>{
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}
module.exports = DB
