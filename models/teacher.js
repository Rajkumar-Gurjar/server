const mongoose = require("mongoose");


const TeacherSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    city:{
        type:String
    }
})
const TeacherModel = mongoose.model('teacher',TeacherSchema)

module.exports = TeacherModel