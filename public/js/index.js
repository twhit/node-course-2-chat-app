var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'tim2',
    text: 'hey hello'
  });
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
