const Course = require("../model/course")
exports.test = async (req, res) => {
    try{
        res.status(200).render(`test`, {
            data: `Test`
        })
    }catch(err){
        res.status(500).render(`test`, {
            data: `Error`
        })
    }
}

exports.getAll = async(req, res) => {
    try{    
        const courses = await Course.find();
        res.status(200).render(`courses`, {
            data: courses,
        })
    }catch(err){
        res.status(500).render(`courses`, {
            status: `fail`,
            data: err.message,
        })
    }
}