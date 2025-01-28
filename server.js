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

const http = require('http');

const server = http.createServer((req, res) => {
  // Set cookie for all subdomains of .onrender.com
  res.setHeader('Set-Cookie', 'myCookie=cookieValue; Domain=.onrender.com; Path=/; HttpOnly; Secure; Max-Age=86400');

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Cookie set for all subdomains of onrender.com!');
});






app.get('/set-cookie', (req, res) => {
  res.cookie('crossDomainCookie', 'cookieValueNew', {
    domain: '.onrender.com', // Leading dot to make it valid for all subdomains
    path: '/',               // Available across all paths
    httpOnly: true,          // Secure the cookie from JavaScript access
    secure: true,            // Use HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 1 day
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
