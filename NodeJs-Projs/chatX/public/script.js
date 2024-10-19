document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
  
    const form = document.getElementById('chat-form');
    const input = document.getElementById('input-msg');
    const messages = document.getElementById('messages');
  
    // Listen for chat message form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = input.value.trim();
  
      if (message) {
        // Emit the chat message event to the server
        socket.emit('chat message', message);
        input.value = '';
      }
    });
  
    // Listen for chat messages from the server
    socket.on('chat message', (message) => {
      const li = document.createElement('li');
      li.textContent = message;
      messages.appendChild(li);
    });
  });
  