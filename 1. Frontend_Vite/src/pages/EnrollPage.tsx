import React from 'react';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css'; // Import CSS
import JqxGrid from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid'; 

const EnrollPage: React.FC = () => {
  const data = [
    { enroll_id: 1, enroll_csid: 101, enroll_csn: 'Math 101', enroll_stdid: 1001, enroll_cy: 2024, enroll_cs: true, enroll_ced: '2024-06-01' },
    { enroll_id: 2, enroll_csid: 102, enroll_csn: 'Physics 101', enroll_stdid: 1002, enroll_cy: 2024, enroll_cs: true, enroll_ced: '2024-06-05' },
  ];

  const columns = [
    { text: 'Enrollment ID', dataField: 'enroll_id', width: '15%' },
    { text: 'Course ID', dataField: 'enroll_csid', width: '15%' },
    { text: 'Course Name', dataField: 'enroll_csn', width: '35%' },
    { text: 'Student ID', dataField: 'enroll_stdid', width: '15%' },
    { text: 'Year', dataField: 'enroll_cy', width: '10%' },
    { text: 'Status', dataField: 'enroll_cs', width: '10%', cellsRenderer: (_row: any, _column: any, value: boolean) => (value ? 'Enrolled' : 'Not Enrolled') },
    { text: 'Completion Date', dataField: 'enroll_ced', width: '10%' },
  ];

  return (
    <div>
      <h1>Enroll Page</h1>
      <JqxGrid
        source={{ localdata: data, datatype: 'array' }}  // Set data source
        columns={columns}  // Set columns
        width="100%"
        height="400px"
        sortable={true}
        pageable={true}
      />
    </div>
  );
};

export default EnrollPage;
