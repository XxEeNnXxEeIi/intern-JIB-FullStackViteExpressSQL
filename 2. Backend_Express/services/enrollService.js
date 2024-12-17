const pool = require('../config/db');

// Get all enrollments
const getEnrollments = async () => {
    const [rows] = await pool.query('SELECT * FROM enroll');
    return rows;
};

// Get an enrollment by ID
const getEnrollmentById = async (enroll_id) => {
    const [rows] = await pool.query('SELECT * FROM enroll WHERE enroll_id = ?', [enroll_id]);
    return rows[0];
};

// Create a new enrollment
const createEnrollment = async (enrollment) => {
    const { enroll_csid, enroll_csn, enroll_stdid, enroll_cy, enroll_cs, enroll_ced } = enrollment;
    const [result] = await pool.query(
        'INSERT INTO enroll (enroll_csid, enroll_csn, enroll_stdid, enroll_cy, enroll_cs, enroll_ced) VALUES (?, ?, ?, ?, ?, ?)',
        [enroll_csid, enroll_csn, enroll_stdid, enroll_cy, enroll_cs, enroll_ced]
    );
    return result.insertId;
};

// Update an enrollment
const updateEnrollment = async (enroll_id, enrollment) => {
    const { enroll_csid, enroll_csn, enroll_stdid, enroll_cy, enroll_cs, enroll_ced } = enrollment;
    const [result] = await pool.query(
        'UPDATE enroll SET enroll_csid = ?, enroll_csn = ?, enroll_stdid = ?, enroll_cy = ?, enroll_cs = ?, enroll_ced = ? WHERE enroll_id = ?',
        [enroll_csid, enroll_csn, enroll_stdid, enroll_cy, enroll_cs, enroll_ced, enroll_id]
    );
    return result.affectedRows;
};

// Delete an enrollment
const deleteEnrollment = async (enroll_id) => {
    const [result] = await pool.query('DELETE FROM enroll WHERE enroll_id = ?', [enroll_id]);
    return result.affectedRows;
};

module.exports = {
    getEnrollments,
    getEnrollmentById,
    createEnrollment,
    updateEnrollment,
    deleteEnrollment
};
