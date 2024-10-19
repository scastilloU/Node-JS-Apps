const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
let userCounter=0;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve the chat HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Set up socket.io connection
io.on('connection', (socket) => {
  console.log('A user connected');
  userCounter++;
  app.get('/', (req, res) => {
    res.render('index', { userCounter });
  });

  // Listen for chat messages
  socket.on('chat message', (message) => {
    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  // Listen for disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3333;
http.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});
