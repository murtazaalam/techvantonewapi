const CoursesController = require('../controllers/courses.controller');
const EventController = require('../controllers/event.controller');
const CartController = require('../controllers/cart.controller');
const OrderController = require('../controllers/orders.controller');
const AuthValidator = require('../middleware/authValidator');
const InterviewQuestionController = require('../controllers/interview.question.controller');
const BlogController = require('../controllers/blog.controller');

const allRoutes = require('express').Router();

allRoutes.get('/all-courses', CoursesController.getAllCourses);
allRoutes.get('/all-courses/:id', CoursesController.getCourseById);
allRoutes.get('/all-events', EventController.getAllEvents);
allRoutes.get('/all-events/:id', EventController.getEventById);
allRoutes.post('/add-to-cart', AuthValidator.authValidate, CartController.addToCart);
allRoutes.get('/items-by-email', AuthValidator.authValidate, CartController.getFromCartByEmail);
allRoutes.delete('/remove-from-cart/:id', AuthValidator.authValidate, CartController.removeFromCart);
allRoutes.post('/add-order', AuthValidator.authValidate, OrderController.addToOrder);
allRoutes.post('/verify-order', AuthValidator.authValidate, OrderController.verifyOrder);
allRoutes.get('/my-orders', AuthValidator.authValidate, OrderController.myOrder);
allRoutes.get('/interview-questions', InterviewQuestionController.getInterviewQuestion);
allRoutes.get('/blogs', BlogController.getAllBlogs);
allRoutes.get('/blogs/:id', BlogController.getBlogById);

module.exports = allRoutes;