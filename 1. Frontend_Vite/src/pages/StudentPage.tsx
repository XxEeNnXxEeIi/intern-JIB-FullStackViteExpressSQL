import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Student = {
  student_id: number;
  student_firstname: string;
  student_lastname: string;
  student_em: string;
};

const StudentPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { student_id: 1, student_firstname: 'John', student_lastname: 'Doe', student_em: 'john@example.com' },
    { student_id: 2, student_firstname: 'Jane', student_lastname: 'Smith', student_em: 'jane@example.com' },
  ]);

  const [formData, setFormData] = useState<Student>({
    student_id: 0,
    student_firstname: '',
    student_lastname: '',
    student_em: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.student_firstname && formData.student_lastname && formData.student_em) {
      setStudents([...students, { ...formData, student_id: students.length + 1 }]);
      setFormData({ student_id: 0, student_firstname: '', student_lastname: '', student_em: '' });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Student Management</h1>

      {/* Add Student Form */}
      <div className="card mb-4">
        <div className="card-header">Add Student</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="student_firstname" className="form-label">First Name</label>
                <input
                  type="text"
                  name="student_firstname"
                  value={formData.student_firstname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="student_lastname" className="form-label">Last Name</label>
                <input
                  type="text"
                  name="student_lastname"
                  value={formData.student_lastname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter last name"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="student_em" className="form-label">Email</label>
                <input
                  type="email"
                  name="student_em"
                  value={formData.student_em}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Add Student</button>
          </form>
        </div>
      </div>

      {/* Student Table */}
      <div className="card">
        <div className="card-header">Student List</div>
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.student_id}>
                  <td>{student.student_id}</td>
                  <td>{student.student_firstname}</td>
                  <td>{student.student_lastname}</td>
                  <td>{student.student_em}</td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center">No students available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
