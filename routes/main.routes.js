const CoursesController = require('../controllers/courses.controller');
const EventController = require('../controllers/event.controller');

const allRoutes = require('express').Router();

allRoutes.get('/all-courses', CoursesController.getAllCourses);
allRoutes.get('/all-courses/:id', CoursesController.getCourseById);
allRoutes.get('/all-events', EventController.getAllEvents);
allRoutes.get('/all-events/:id', EventController.getEventById)
module.exports = allRoutes;