var app = require('express')()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

var root = "./public";
server.listen(80);

app.get('/', function (req, res) {
    res.sendfile(root + '/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});