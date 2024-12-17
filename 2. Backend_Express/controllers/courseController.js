const courseService = require('../services/courseService');

const getAllCourses = async (req, res) => {
    try {
        const courses = await courseService.getCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCourse = async (req, res) => {
    try {
        const courseId = await courseService.createCourse(req.body);
        res.status(201).json({ courseId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCourses,
    createCourse
};
