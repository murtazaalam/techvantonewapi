const courses = require('../models/course');

class CourseService {
    static async getAllCourses(){
        try{
            return await courses.find();
        }catch(err){
            throw err;
        }
    }
    static async getCourseById(id){
        try{
            return await courses.findOne(id);
        }catch(err){
            throw err;
        }
    }
}
module.exports = CourseService;