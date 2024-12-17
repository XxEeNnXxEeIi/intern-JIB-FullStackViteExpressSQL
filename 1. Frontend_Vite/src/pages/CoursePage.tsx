import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBCardHeader, MDBRow, MDBCol, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

type Course = {
  course_id: number;
  course_n: string;
  course_red: string; // Date in string format
  course_y: number;
};

const CoursePage: React.FC = () => {
  const [basicActive, setBasicActive] = useState<string>('tab1');
  const [courses] = useState<Course[]>([
    { course_id: 1, course_n: 'Mathematics', course_red: '2024-06-01', course_y: 2024 },
    { course_id: 2, course_n: 'Science', course_red: '2024-06-05', course_y: 2024 },
  ]);

  const handleTabClick = (tab: string) => setBasicActive(tab);

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
                          <strong>Year:</strong> {course.course_y}
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
              <p className="text-muted text-center">Course addition functionality coming soon!</p>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default CoursePage;
