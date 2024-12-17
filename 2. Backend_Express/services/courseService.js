const pool = require('../config/db');

const getCourses = async () => {
    const [rows] = await pool.query('SELECT * FROM course');
    return rows;
};

const createCourse = async (course) => {
    const { course_sid, course_n, course_red, course_y, course_s, course_ed } = course;
    const [result] = await pool.query(
        'INSERT INTO course (course_sid, course_n, course_red, course_y, course_s, course_ed) VALUES (?, ?, ?, ?, ?, ?)',
        [course_sid, course_n, course_red, course_y, course_s, course_ed]
    );
    return result.insertId;
};

module.exports = {
    getCourses,
    createCourse
};
