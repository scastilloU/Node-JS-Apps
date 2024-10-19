const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const path = require('path');

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set static directory for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve static CSS files with the correct MIME type
app.use('/css', express.static(path.join(__dirname, 'public', 'css'), { 'Content-Type': 'text/css' }));

// Route for the sign-up form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});


// Route for handling form submission
app.post('/signup', (req, res) => {
    // Handle form submission here
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // For demonstration purposes, you can simply redirect to the signed-in page
    res.redirect('/signedin');
});

// Route for the signed-in page
app.get('/signedin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'bootstrap-webItems', 'signedinUI', 'signedin.html'));
});

// Route for signing out
app.post('/signout', (req, res) => {
    // Redirect the user to localhost:3000  
    res.redirect('http://localhost:4000');
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
