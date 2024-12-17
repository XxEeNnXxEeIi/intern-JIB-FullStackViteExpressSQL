const express = require('express');
const courseRoutes = require('./routes/courseRoutes');
const enrollRoutes = require('./routes/enrollRoutes');
const studentRoutes = require('./routes/studentRoutes'); 

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/enroll', enrollRoutes);
app.use('/api/students', studentRoutes); 

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
