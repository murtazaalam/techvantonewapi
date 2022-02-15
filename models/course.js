const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courses = new Schema({});
module.exports = mongoose.model("courses",courses);