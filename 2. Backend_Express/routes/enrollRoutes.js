const express = require('express');
const enrollController = require('../controllers/enrollController');

const router = express.Router();

// Routes for enrollments
router.get('/', enrollController.getAllEnrollments); // Get all enrollments
router.get('/:id', enrollController.getEnrollment); // Get a specific enrollment by ID
router.post('/', enrollController.createEnrollment); // Create a new enrollment
router.put('/:id', enrollController.updateEnrollment); // Update an existing enrollment
router.delete('/:id', enrollController.deleteEnrollment); // Delete an enrollment

module.exports = router;
