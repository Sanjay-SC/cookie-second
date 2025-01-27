const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// CORS Configuration
app.use(
  cors({
    origin: 'https://cookie-p1yx.onrender.com/', // Frontend domain
    credentials: true, // Allow cookies
  })
);

app.use(cookieParser());
app.use(express.json()); // Enable parsing JSON in POST requests

// Route to set the cookie
app.use((req, res, next) => {
  // Allow cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', 'https://cookie-p1yx.onrender.com/'); // Replace with your domain
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});




// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Adjust to your file's location
});






app.get('/set-cookie', (req, res) => {
  res.cookie('crossDomainCookie', 'cookieValue', {
    httpOnly: true,
    secure: true, // Use HTTPS
    sameSite: 'None', // Allow cross-site requests
    domain: '.onrender.com', // Set for your domain or subdomains
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.send('Cookie set');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
