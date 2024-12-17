const studentService = require('../services/studentService');

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific student by ID
const getStudent = async (req, res) => {
    try {
        const student_id = req.params.id;
        const student = await studentService.getStudentById(student_id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new student
const createStudent = async (req, res) => {
    try {
        const studentData = req.body;
        const student_id = await studentService.createStudent(studentData);
        res.status(201).json({ student_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an existing student
const updateStudent = async (req, res) => {
    try {
        const student_id = req.params.id;
        const studentData = req.body;
        const affectedRows = await studentService.updateStudent(student_id, studentData);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a student
const deleteStudent = async (req, res) => {
    try {
        const student_id = req.params.id;
        const affectedRows = await studentService.deleteStudent(student_id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
};
