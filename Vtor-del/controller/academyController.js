const Academy = require("../model/academy")

exports.createAcademy =  async(req, res) => {
    try{
        const academy = await Academy.create(req.body);
        res.status(201).json({
            status: `success`,
            data: academy,
        });
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message,
        })
    }
}

exports.getAll = async(req, res) => {
    try{    
        const academies = await Academy.find();
        res.status(200).json({
            status: `success`,
            data: academies,
        })
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message,
        })
    }
}

exports.updateAcademy = async (req, res) => {
    try{
        const academy = await Academy.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({
            status: `success`,
            data: academy
        })
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message,
        })
    }
}

exports.deleteAcademy = async (req, res) => {
    try{
        await Academy.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: `success`
        })
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message,
        })
    }
}