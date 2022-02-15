const events = require('../models/event');

class EventService {
    static async getAllEvents(){
        try{
            return await events.find();
        }catch(err){
            throw err;
        }
    }
    static async getEventById(id){
        try{
            return await events.findOne(id);
        }catch(err){
            throw err;
        }
    }
}
module.exports = EventService;