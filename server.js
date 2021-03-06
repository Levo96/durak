require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('views', path.join(__dirname,'views'));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));


app.route('/').get((req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
/* --------------------------------------------------------------------------- */

let roomLog = {};

/* ------------------------------------------------------------------------------*/

io.on('connection', socket => {

  //enter a room
  socket.on('createRoom', (data) => {
    let roomName = data["roomName"];
    if(roomLog[roomName])
    {
      socket.emit("roomName already in use");
      return;
    }
    roomLog[roomName] = {deck: [], player1Hand: [], player2Hand: [], socketIDs:[]};
    roomLog[roomName]["socketIDs"].push(socket.id);
    socket.join(roomName);
    io.in(roomName).emit("userJoinedRoom", {name: roomName, roomInfo: roomLog[roomName]});
  });

  socket.on('enterRoom', (data) => {

    let roomObj = io.sockets.adapter.rooms.get(data["roomName"]);
    let socketClients = io.sockets.adapter.rooms.get(data["roomName"]).size;
    let roomName = data["roomName"];


    if(roomObj)
    {
        if(socketClients == 0)
        {
          socket.emit('room empty');
          return;
        }
        else if(socketClients >= 2)
        {
          socket.emit('room full');
          return;
        }
        else
        {
          roomLog[roomName]["socketIDs"].push(socket.id);
          socket.join(roomName);
          io.in(roomName).emit('userJoinedRoom', {name: roomName, roomInfo: roomLog[roomName]});
        }
    }
    else
    {
      socket.emit('room not found');
      return;
    }

  });

  //send message in a room
  socket.on('handleMessage', (data)=> {
    let roomName = data["roomName"];
    let newMessage = data["messageString"];
    io.in(data["roomName"]).emit('newMessage', {message: newMessage});
  });

  //leave room



}); //-> end of io





/*--------------------------------------------------------------------------*/
app.route('/vscpu').get((req, res) => {
  res.sendFile(__dirname + '/views/vscpu.html');
})

let onPort = process.env.PORT || 5000
http.listen(onPort, ()=> {
  console.log("Listening on Port: " + onPort);
});
