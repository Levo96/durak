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

let room =
{
  socketIDs: []
}
/* ------------------------------------------------------------------------------*/

io.on('connection', socket => {

  //enter a room
  socket.on('createRoom', (data) => {
    
  });

  socket.on('enterRoom', (data) => {
  });


  //send message in a room


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
