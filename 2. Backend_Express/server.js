const express = require('express');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');
const enrollRoutes = require('./routes/enrollRoutes');
const studentRoutes = require('./routes/studentRoutes'); 

const app = express();
const port = 3000;

// Use CORS with a wildcard for localhost (any port)
app.use(cors({ origin: '*' }));

// Middleware
app.use(express.json());

// Routes
app.use('/api/course', courseRoutes);
app.use('/api/enroll', enrollRoutes);
app.use('/api/student', studentRoutes); 

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
