const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// Routes for students
router.get('/', studentController.getAllStudents); // Get all students
router.get('/:id', studentController.getStudent); // Get a specific student by ID
router.post('/', studentController.createStudent); // Create a new student
router.put('/:id', studentController.updateStudent); // Update an existing student
router.delete('/:id', studentController.deleteStudent); // Delete a student

module.exports = router;
