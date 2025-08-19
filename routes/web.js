const express = require('express');

const ContactController = require('../controllers/ContactController');
const TeacherController = require('../controllers/TeacherController')
const CourseController = require('../controllers/CourseController');
const UserController = require('../controllers/UserController');
const BookingController = require('../controllers/BookingController')
const router = express.Router();
const checkAuth = require('../middleware/auth')

// teacher
router.get('/teacher', TeacherController.display);
router.post('/createTeacher',TeacherController.create);

// contact
router.get('/contact', ContactController.display);
router.post('/contact/create',ContactController.create);
router.get('/contact/view/:id',ContactController.view)
router.put('/contact/update/:id',ContactController.update)
router.delete('/contact/delete/:id',ContactController.delete)

// course
router.get('/course', CourseController.display);
router.post('/course/create',CourseController.create);
router.get('/course/view/:id',CourseController.view)
router.put('/course/update/:id',CourseController.update)
router.delete('/course/delete/:id',CourseController.delete)

// User
router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.get('/profile',checkAuth,UserController.profile)
router.get('/logout',UserController.logout)


//booking 
router.post('/booking/create/:courseId',checkAuth,BookingController.createbooking)
router.get('/booking/mybookings', checkAuth, BookingController.getUserBookings)
router.get('/admin/bookings',checkAuth, BookingController.getAllBookings)


// router.get('/',(req,res)=>{
//     res.send("hello /")
// })

// router.get('/about',(req,res)=>{
//     res.send("hello about")
// })

module.exports = router;
 