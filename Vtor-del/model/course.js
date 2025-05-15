const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: String,
    address: String,
    field: String
})

const Course = mongoose.model(`Course`, courseSchema, `Course`);
module.exports = Course;