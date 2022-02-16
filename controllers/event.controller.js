const EventService = require("../services/event.service");
class EventController {
    static async getAllEvents(req, res){
        let data = await EventService.getAllEvents();
        res.send(data);
    }
    static async getEventById(req, res){
        let data = await EventService.getEventById({_id:req.params.id});
        res.send(data);
    }
}
module.exports = EventController;