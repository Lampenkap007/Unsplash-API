const io = require('socket.io')(3000)

io.on('connect', socket => {
    console.log('New Client')
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', message)
    })
})