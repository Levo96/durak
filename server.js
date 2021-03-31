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
/* --------------------------------------------------------------------- */
let roomLog = {};

const allCardsUnSorted = require('./cards');

const mixCards = (roomName) =>
{
  if(roomLog[roomName])
  {
    //random shuffle cards
    let copyOfAllCards = [...allCardsUnSorted];
    do
    {
      let randomIndex = Math.floor(Math.random() * (copyOfAllCards.length));
      if(randomIndex == 0)
      {
        roomLog[roomName]["deck"].push((copyOfAllCards.splice(0,1))[0]);
      }
      else
      {
        roomLog[roomName]["deck"].push((copyOfAllCards.splice(randomIndex, 1))[0]);
      }
    } while(copyOfAllCards.length > 0);

    //joker suit
    let jokerSuit = roomLog[roomName]["deck"][0]["suit"];

    for(let i = 0; i < roomLog[roomName]["deck"].length; i++)
    {
      if(jokerSuit == roomLog[roomName]["deck"][i]["suit"])
      {
        roomLog[roomName]["deck"][i]["jokerSuit"] = true;
      }
    }
  }
}

const randomTurn = (roomName) =>
{
  if(roomLog[roomName])
  {
    let random = Math.floor(Math.random() * (1 + 1));
    let turn = '';
    if(random)
    {
      turn = roomLog[roomName]["socketIDs"][random];
      roomLog[roomName]["playerTurn"] = turn;
      roomLog[roomName]["moveTurn"] = "attack";
    }
    else
    {
      turn = roomLog[roomName]["socketIDs"][random];
      roomLog[roomName]["playerTurn"] = turn;
      roomLog[roomName]["moveTurn"] = "attack";
    }
  }
}

const shuffleCards = (roomName) =>
{
  if(roomLog[roomName])
  {
    let turn = roomLog[roomName]["playerTurn"];
    //-- INSERT FUNCTION HERE | CHECK DECK DOM RENDER
    if(turn == roomLog[roomName]["socketIDs"][0])
    {
      for(let i = roomLog[roomName]["player1Hand"].length; i < 6; i++)
      {
        if(roomLog[roomName]["deck"].length > 0)
        {
          roomLog[roomName]["player1Hand"].push(roomLog[roomName]["deck"].pop());
        }
      }

      for(let i = roomLog[roomName]["player2Hand"].length; i < 6; i++)
      {
        if(roomLog[roomName]["deck"].length > 0)
        {
          roomLog[roomName]["player2Hand"].push(roomLog[roomName]["deck"].pop());
        }
      }
    }
    else
    {

      for(let i = roomLog[roomName]["player2Hand"].length; i < 6; i++)
      {
        if(roomLog[roomName]["deck"].length > 0)
        {
          roomLog[roomName]["player2Hand"].push(roomLog[roomName]["deck"].pop());
        }
      }

      for(let i = roomLog[roomName]["player1Hand"].length; i < 6; i++)
      {
        if(roomLog[roomName]["deck"].length > 0)
        {
          roomLog[roomName]["player1Hand"].push(roomLog[roomName]["deck"].pop());
        }
      }
    }
    //-- INSERT FUNCTION HERE | CHECK DECK DOM RENDER
  }
}



/* ------------------------------------------------------------------------------*/

io.on('connection', socket => {
  // socketID request / response
  socket.on('getSocketID', (data) => {
    let clientSocketID = socket.id;
    socket.emit('recieveSocketID', {socketID: clientSocketID});
  });
  //enter a room
  socket.on('createRoom', (data) => {
    let roomName = data["roomName"];
    if(roomLog[roomName])
    {
      socket.emit("roomName already in use");
      return;
    }
    roomLog[roomName] = {deck: [], onTableAttack: [], onTableDefense: [], playerTurn:'', moveTurn: '', player1Hand: [], player2Hand: [], socketIDs:[], player1: '', player2: '',};
    roomLog[roomName]["socketIDs"].push(socket.id);
    roomLog[roomName]["player1"] = socket.id;
    socket.join(roomName);
    io.in(roomName).emit("userJoinedRoom", {name: roomName, roomInfo: roomLog[roomName]});
    socket.emit('recieveSocketID', {socketID: socket.id});
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
          roomLog[roomName]['player2'] = socket.id;
          socket.join(roomName);
          io.in(roomName).emit('userJoinedRoom', {name: roomName, roomInfo: roomLog[roomName]});
          //loading Game Assets
          mixCards(roomName);
          randomTurn(roomName);
          shuffleCards(roomName);
          io.in(roomName).emit('loadingGameAssets', {name: roomName, roomInfo: roomLog[roomName]});
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
  // ---------- EVERYTHING ABOUT GAME ----------------------------------------
//--------- TURN
  socket.on('meStarting', (data) => {
    let roomName = data["roomName"];
    socket.to(roomName).emit("recieveStartTurnInfo");
  });

  socket.on('readyForInitGame', (data)=> {
    let roomName = data["roomName"];

    if(socket.id == roomLog[roomName]["player1"])
    {
      socket.emit('initGameClient', {name: roomName, roomInfo: roomLog[roomName], myHand: roomLog[roomName]["player1Hand"], opponentHand: roomLog[roomName]["player2Hand"]});
    }
    else
    {
      socket.emit('initGameClient', {name: roomName, roomInfo: roomLog[roomName], myHand: roomLog[roomName]["player2Hand"], opponentHand: roomLog[roomName]["player1Hand"]});
    }
  });

  socket.on('notifyStart', (data)=> {
    let roomName = data["roomName"];
    socket.to(roomName).emit('startInfo');
  });


  socket.on('playerMove', (data) => {
    let roomName = data["roomName"];
    let whosTurn = data["player"];
    let move = data["turn"];
    let cardID = data["cardID"];
    if(whosTurn == "player1")
    {
    }
    else
    {
    }
  });

}); //-> end of io





/*--------------------------------------------------------------------------*/
app.route('/vscpu').get((req, res) => {
  res.sendFile(__dirname + '/views/vscpu.html');
})

let onPort = process.env.PORT || 5000
http.listen(onPort, ()=> {
  console.log("Listening on Port: " + onPort);
});
