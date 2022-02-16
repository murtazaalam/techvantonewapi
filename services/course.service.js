const courses = require('../models/course');

class CourseService {
    static async getAllCourses(){
        try{
            return await courses.find();
        }catch(err){
            console.log(err);
            //throw err;
        }
    }
    static async getCourseById(id){
        try{
            return await courses.findById(id);
        }catch(err){
            throw err;
        }
    }
}
module.exports = CourseService;