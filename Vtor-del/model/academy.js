const mongoose = require("mongoose");

const academySchema = new mongoose.Schema({
    name: String,
    address: String,
});

const Academy = mongoose.model(`Academy`, academySchema, `Academy`);
module.exports = Academy;