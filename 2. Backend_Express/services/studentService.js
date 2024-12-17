const pool = require('../config/db');

// Get all students
const getStudents = async () => {
    const [rows] = await pool.query('SELECT * FROM student');
    return rows;
};

// Get a student by ID
const getStudentById = async (student_id) => {
    const [rows] = await pool.query('SELECT * FROM student WHERE student_id = ?', [student_id]);
    return rows[0];
};

// Create a new student
const createStudent = async (student) => {
    const { student_id, student_firstname, student_lastname, student_em, student_pw } = student;
    const [result] = await pool.query(
        'INSERT INTO student (student_id, student_firstname, student_lastname, student_em, student_pw) VALUES (?, ?, ?, ?, ?)',
        [student_id, student_firstname, student_lastname, student_em, student_pw]
    );
    return result.insertId;
};

// Update a student
const updateStudent = async (student_id, student) => {
    const { student_firstname, student_lastname, student_em, student_pw } = student;
    const [result] = await pool.query(
        'UPDATE student SET student_firstname = ?, student_lastname = ?, student_em = ?, student_pw = ? WHERE student_id = ?',
        [student_firstname, student_lastname, student_em, student_pw, student_id]
    );
    return result.affectedRows;
};

// Delete a student
const deleteStudent = async (student_id) => {
    const [result] = await pool.query('DELETE FROM student WHERE student_id = ?', [student_id]);
    return result.affectedRows;
};

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};
