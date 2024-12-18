import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';  // Import MDB React UI Kit CSS
import { MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit'; // Importing MDB components
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css'; // Import JQWidgets CSS
import JqxGrid from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid'; // Import JQWidgets Grid

type Student = {
  student_id: number | undefined;
  student_firstname: string;
  student_lastname: string;
  student_em: string;
  student_pw: string;
};

const StudentPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState<Student>({
    student_id: undefined,
    student_firstname: '',
    student_lastname: '',
    student_em: '',
    student_pw: '',
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get<Student[]>('http://localhost:3000/api/student');
        setStudents(response.data);
      } catch (error) {
        alert('Error fetching students');
      }
    };
    fetchStudents();
  }, []);

  const columns = [
    { text: 'ID', dataField: 'student_id', width: '10%' },
    { text: 'First Name', dataField: 'student_firstname', width: '20%' },
    { text: 'Last Name', dataField: 'student_lastname', width: '20%' },
    { text: 'Email', dataField: 'student_em', width: '30%' },
    { text: 'Password', dataField: 'student_pw', width: '20%' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/student', formData);
      setStudents((prev) => [...prev, response.data]);

      // Show server response
      alert(`Student added successfully! Response: ${JSON.stringify(response.data)}`);

      setFormData({ student_id: undefined, student_firstname: '', student_lastname: '', student_em: '', student_pw: '' });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          `Error adding student:\nStatus: ${error.response?.status || 'N/A'}\nMessage: ${
            error.response?.data?.error || error.message || 'Unknown error'
          }`
        );
      } else {
        alert(`An unexpected error occurred: ${(error as Error).message}`);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">ลงทะเบียนนักศึกษา (Register)</h1>

      {/* Add Student Form using MDB React UI Kit */}
      <MDBCard className="mb-4 shadow-sm">
        <MDBCardHeader className="bg-primary text-white">แบบฟอร์มสมัคร (Table: Student)</MDBCardHeader>
        <MDBCardBody>
          <form onSubmit={handleSubmit}>
            <div className="row gy-3">
              <div className="col-md-6">
                {/* Using MDBInput for student ID input */}
                <MDBInput
                  label="รหัสนักศึกษา"
                  type="number"
                  name="student_id"
                  value={formData.student_id}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                {/* Using MDBInput for first name */}
                <MDBInput
                  label="ชื่อจริง"
                  type="text"
                  name="student_firstname"
                  value={formData.student_firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                {/* Using MDBInput for last name */}
                <MDBInput
                  label="นามสกุล"
                  type="text"
                  name="student_lastname"
                  value={formData.student_lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                {/* Using MDBInput for email */}
                <MDBInput
                  label="อีเมล"
                  type="email"
                  name="student_em"
                  value={formData.student_em}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                {/* Using MDBInput for password */}
                <MDBInput
                  label="รหัสผ่าน"
                  type="password"
                  name="student_pw"
                  value={formData.student_pw}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              {/* Using MDBBtn for the submit button */}
              <MDBBtn type="submit" color="warning" size="lg" className="px-4">
                ลงทะเบียน
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>

      {/* Student Table using JQWidgets Grid */}
      <div className="card mb-4">
        <div className="card-header bg-info text-white p-2">ข้อมูลนักศึกษาทั้งหมด (Table: student) </div>
        <JqxGrid
          source={{ localdata: students, datatype: 'array' }} // Data source
          columns={columns}  // Grid columns
          width="100%"
          height="400px"
          pageable={true}  // Enable pagination
          sortable={true}  // Enable sorting
          altrows={true}   // Add alternating row styles
          enabletooltips={true} // Enable tooltips
        />
      </div>
    </div>
  );
};

export default StudentPage;
