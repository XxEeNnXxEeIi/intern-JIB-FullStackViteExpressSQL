import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  MDBContainer, MDBCard, MDBCardBody, MDBTabs, MDBTabsItem, MDBTabsLink, 
  MDBTabsContent, MDBTabsPane, MDBCardHeader, MDBRow, MDBCol, MDBCardTitle, 
  MDBCardText, MDBBtn, MDBInput 
} from 'mdb-react-ui-kit';

type Course = {
  course_id: number | undefined;
  course_sid: number;
  course_n: string;
  course_red: string;
  course_y: number;
  course_s: boolean;
  course_ed: string;
};

const CoursePage: React.FC = () => {
  const [basicActive, setBasicActive] = useState<string>('tab1');
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState<Course>({
    course_id: undefined,
    course_sid: 0,
    course_n: '',
    course_red: '',
    course_y: 2024,
    course_s: false,
    course_ed: '',
  });

  // Fetching courses from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<Course[]>('http://localhost:3000/api/course');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        alert('Error fetching courses from the server.');
      }
    };

    fetchCourses();
  }, []);

  // Handling tab clicks
  const handleTabClick = (tab: string) => setBasicActive(tab);

  // Handling input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  // Adding new course
  const handleAddCourse = () => {
    if (
      newCourse.course_sid && 
      newCourse.course_n && 
      newCourse.course_red && 
      newCourse.course_y && 
      newCourse.course_s !== undefined && 
      newCourse.course_ed
    ) {
      const newCourseData = { ...newCourse, course_id: courses.length + 1 };
      setCourses((prevCourses) => [...prevCourses, newCourseData]);
      setNewCourse({ 
        course_id: undefined, 
        course_sid: 0, 
        course_n: '', 
        course_red: '', 
        course_y: 2024, 
        course_s: false, 
        course_ed: ''
      });
    }
  };

  return (
    <MDBContainer className="mt-5">
      <h1 className="text-center mb-4">Course Management</h1>

      <MDBCard className="mb-4">
        <MDBCardHeader className="text-center fw-bold">Course Details</MDBCardHeader>
        <MDBCardBody>
          <MDBTabs className="mb-3">
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleTabClick('tab1')} active={basicActive === 'tab1'}>
                All Courses
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleTabClick('tab2')} active={basicActive === 'tab2'}>
                Add Course
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            {/* Tab 1: All Courses */}
            <MDBTabsPane show={basicActive === 'tab1'}>
              <MDBRow>
                {courses.map((course) => (
                  <MDBCol md="6" lg="4" key={course.course_id} className="mb-4">
                    <MDBCard>
                      <MDBCardBody>
                        <MDBCardTitle>{course.course_n}</MDBCardTitle>
                        <MDBCardText>
                          <strong>Start Date:</strong> {course.course_red} <br />
                          <strong>Year:</strong> {course.course_y} <br />
                          <strong>Status:</strong> {course.course_s ? 'Active' : 'Inactive'} <br />
                          <strong>End Date:</strong> {course.course_ed}
                        </MDBCardText>
                        <MDBBtn color="primary">View Details</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBTabsPane>

            {/* Tab 2: Add Course */}
            <MDBTabsPane show={basicActive === 'tab2'}>
              <MDBRow>
                <MDBCol md="6" className="offset-md-3">
                  <MDBCard className="shadow-sm">
                    <MDBCardHeader className="text-center">Add New Course</MDBCardHeader>
                    <MDBCardBody>
                      <MDBInput
                        label="Course SID"
                        type="number"
                        name="course_sid"
                        value={newCourse.course_sid}
                        onChange={handleInputChange}
                        required
                      />
                      <MDBInput
                        label="Course Name"
                        type="text"
                        name="course_n"
                        value={newCourse.course_n}
                        onChange={handleInputChange}
                        required
                      />
                      <MDBInput
                        label="Start Date"
                        type="date"
                        name="course_red"
                        value={newCourse.course_red}
                        onChange={handleInputChange}
                        required
                      />
                      <MDBInput
                        label="Year"
                        type="number"
                        name="course_y"
                        value={newCourse.course_y}
                        onChange={handleInputChange}
                        required
                      />
                      <MDBInput
                        label="Status"
                        type="checkbox"
                        name="course_s"
                        checked={newCourse.course_s}
                        onChange={(e) => setNewCourse({ ...newCourse, course_s: e.target.checked })}
                      />
                      <MDBInput
                        label="End Date"
                        type="date"
                        name="course_ed"
                        value={newCourse.course_ed}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="text-center mt-3">
                        <MDBBtn color="success" onClick={handleAddCourse}>
                          Add Course
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default CoursePage;
