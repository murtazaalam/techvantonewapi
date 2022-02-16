const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const techvanto_events = new Schema({});
module.exports = mongoose.model("techvanto_events",techvanto_events);