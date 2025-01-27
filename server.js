const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: 'https://fir-8d81e.web.app', // Frontend domain
    credentials: true, // Allow cookies
  })
);

app.use(cookieParser());
app.use(express.json()); // Enable parsing JSON in POST requests

// Route to set the cookie
app.post('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'myValue', {
    domain: 'fir-8d81e.web.app', // Target domain
    path: '/', // Cookie available site-wide
    secure: true, // HTTPS only
    httpOnly: true, // Not accessible via JavaScript
    sameSite: 'None', // Required for cross-origin
  });

  res.status(200).send('Cookie has been set');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
