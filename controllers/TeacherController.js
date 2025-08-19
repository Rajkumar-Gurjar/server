const TeacherModel = require('../models/teacher')

class TeacherController{
    static display = async(req,res)=>{
        try{
            res.send("hello display")
        }catch (error){
            console.log(error)
        }
    }
    static create = async(req,res) => {
        try {
            console.log(req.body)
            const {name,email,city} = req.body
            const data = await TeacherModel.create({
                name,
                email,
                city
            })
            res.json(data)
        }catch (error){
            console.log(error)
        }
    }
}

module.exports = TeacherController