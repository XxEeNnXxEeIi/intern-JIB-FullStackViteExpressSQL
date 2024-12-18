import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import './App.css';

import StudentPage from './pages/StudentPage'; 
import CoursePage from './pages/CoursePage';   
import EnrollPage from './pages/EnrollPage';   

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/student" element={<StudentPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/enroll" element={<EnrollPage />} />
      </Routes>
    </Router>
  );
}

export default App;
