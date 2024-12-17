const enrollService = require('../services/enrollService');

// Get all enrollments
const getAllEnrollments = async (req, res) => {
    try {
        const enrollments = await enrollService.getEnrollments();
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific enrollment by ID
const getEnrollment = async (req, res) => {
    try {
        const enroll_id = req.params.id;
        const enrollment = await enrollService.getEnrollmentById(enroll_id);
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new enrollment
const createEnrollment = async (req, res) => {
    try {
        const enrollmentData = req.body;
        const enroll_id = await enrollService.createEnrollment(enrollmentData);
        res.status(201).json({ enroll_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an existing enrollment
const updateEnrollment = async (req, res) => {
    try {
        const enroll_id = req.params.id;
        const enrollmentData = req.body;
        const affectedRows = await enrollService.updateEnrollment(enroll_id, enrollmentData);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        res.status(200).json({ message: 'Enrollment updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an enrollment
const deleteEnrollment = async (req, res) => {
    try {
        const enroll_id = req.params.id;
        const affectedRows = await enrollService.deleteEnrollment(enroll_id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        res.status(200).json({ message: 'Enrollment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllEnrollments,
    getEnrollment,
    createEnrollment,
    updateEnrollment,
    deleteEnrollment
};
