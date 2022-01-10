const mongoose = require("mongoose")
const characterSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
})