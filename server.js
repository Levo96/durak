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
/* ----------------------------------GAME FUNCTIONS ----------------------------------- */
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
    let random = 0//Math.floor(Math.random() * (1 + 1));
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

const checkDeckDom = (roomNameStr) =>
{
  let roomName = roomNameStr;
  if(roomLog[roomName])
  {
    if(roomLog[roomName]["deck"].length <= 1)
    {
      io.in(roomName).emit('removeDeckCoverCard');
    }
    if(roomLog[roomName]["deck"].length == 0)
    {
      io.in(roomName).emit('removeJokerSuitCard')
    }
  }
}

const shuffleCards = (roomNameStr) =>
{
  let roomName = roomNameStr;
  if(roomLog[roomName])
  {
    let turn = roomLog[roomName]["playerTurn"];
    checkDeckDom(roomName);
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
    checkDeckDom(roomName);
  }
}

const findAndRemoveCardByIndex = (roomNameStr, playerStr, cardIndexStr) =>
{
  let roomName = roomNameStr;
  let player = playerStr;
  let cardIndex = cardIndexStr;
  let newHand;
  let cardObj;

  if(player == "player1")
  {
    cardObj = roomLog[roomName]["player1Hand"][cardIndex];

    newHand = roomLog[roomName]["player1Hand"].filter((card) => {
      if(cardObj["DomID"] != card["DomID"])
      {
        return card;
      }
    });

    roomLog[roomName]["player1Hand"] = [...newHand];

  }
  else
  {
    cardObj = roomLog[roomName]["player2Hand"][cardIndex];

    newHand = roomLog[roomName]["player2Hand"].filter((card) => {
      if(cardObj["DomID"] != card["DomID"])
      {
        return card;
      }
    });

    roomLog[roomName]["player2Hand"] = [...newHand];
  }
  return cardObj;
}

const setAttackDefendCheck = (roomNameStr, cardObj) =>
{
  let roomName = roomNameStr;
  let card = cardObj;

  if(roomLog[roomName])
  {
    /* -------------------------------------------------------------------------------------------------------*/
    if(roomLog[roomName]["attackDefendCheck"]["position0"] == false && roomLog[roomName]["onTableAttack"][0])
    {
      roomLog[roomName]["attackDefendCheck"]["position0"] = true;
      roomLog[roomName]["onTableDefense"].push(card);
      return;
    }
    /*---------------------------------------------------------------------------------------------------------------*/
    if(roomLog[roomName]["attackDefendCheck"]["position1"] == false && roomLog[roomName]["onTableAttack"][1])
    {
      roomLog[roomName]["attackDefendCheck"]["position1"] = true;
      roomLog[roomName]["onTableDefense"].push(card);
      return;
    }
    /*---------------------------------------------------------------------------------------------------------------*/
    if(roomLog[roomName]["attackDefendCheck"]["position2"] == false && roomLog[roomName]["onTableAttack"][2])
    {
      roomLog[roomName]["attackDefendCheck"]["position2"] = true;
      roomLog[roomName]["onTableDefense"].push(card);
      return;
    }
    /*---------------------------------------------------------------------------------------------------------------*/
    if(roomLog[roomName]["attackDefendCheck"]["position3"] == false && roomLog[roomName]["onTableAttack"][3])
    {
      roomLog[roomName]["attackDefendCheck"]["position3"] = true;
      roomLog[roomName]["onTableDefense"].push(card);
      return;
    }
    /*---------------------------------------------------------------------------------------------------------------*/
    if(roomLog[roomName]["attackDefendCheck"]["position4"] == false && roomLog[roomName]["onTableAttack"][4])
    {
      roomLog[roomName]["attackDefendCheck"]["position4"] = true;
      roomLog[roomName]["onTableDefense"].push(card);
      return;
    }
    /*---------------------------------------------------------------------------------------------------------------*/
    if(roomLog[roomName]["attackDefendCheck"]["position5"] == false && roomLog[roomName]["onTableAttack"][5])
    {
      roomLog[roomName]["attackDefendCheck"]["position5"] = true;
      roomLog[roomName]["onTableDefense"].push(card);
      return;
    }
    /*---------------------------------------------------------------------------------------------------------------*/
  }
}

const resetTablesAndAttackDefenseCheckAndCounter = (roomNameStr) =>
{
  let roomName = roomNameStr;
  if(roomLog[roomName])
  {
    roomLog[roomName]["onTableAttack"] = [];
    roomLog[roomName]["onTableDefense"] = [];
    for(let x in roomLog[roomName]["attackDefendCheck"])
    {
      roomLog[roomName]["attackDefendCheck"][x] = false;
    }
    roomLog[roomName]["attackCounter"] = 0;
  }
}

const turnToggle = (roomNameStr) =>
{
  let roomName = roomNameStr;

  if(roomLog[roomName])
  {
    if(roomLog[roomName]["playerTurn"] == roomLog[roomName]["socketIDs"][0])
    {
      roomLog[roomName]["playerTurn"] = roomLog[roomName]["socketIDs"][1];
    }
    else
    {
      roomLog[roomName]["playerTurn"] = roomLog[roomName]["socketIDs"][0]
    }
  }
}

const drawCardsFromTable = (roomNameStr, playerStr) =>
{
  let roomName = roomNameStr;
  let player = playerStr;

  if(roomLog[roomName])
  {
    let allCardsOnTable = [...roomLog[roomName]["onTableAttack"], ...roomLog[roomName]["onTableDefense"]];
    if(player == "player1")
    {
      for(let i = 0; i < allCardsOnTable.length; i++)
      {
        roomLog[roomName]["player1Hand"].push(allCardsOnTable[i]);
      }
    }
    else
    {
      for(let i = 0; i < allCardsOnTable.length; i++)
      {
        roomLog[roomName]["player2Hand"].push(allCardsOnTable[i]);
      }
    }
  }
}

const checkWinner = (roomNameStr, playerStr) =>
{
  let roomName = roomNameStr;
  let player = playerStr;

  if(roomLog[roomName])
  {
    if(roomLog[roomName]["deck"].length == 0)
    {
      if(player == "player1")
      {
        if(roomLog[roomName]["player2Hand"].length == 0)
        {
          roomLog[roomName]["winner"] = roomLog[roomName]["socketIDs"][1];
          io.in(roomName).emit('weHaveAwinner', {winner: roomLog[roomName]["winner"]});
          return;
        }
        if(roomLog[roomName]["player1Hand"].length == 0)
        {
          roomLog[roomName]["winner"] = roomLog[roomName]["socketIDs"][0];
          io.in(roomName).emit("weHaveAwinner",{winner: roomLog[roomName]["winner"]});
          return;
        }
      }
      if(player == "player2")
      {
        if(roomLog[roomName]["player1Hand"].length == 0)
        {
          roomLog[roomName]["winner"] = roomLog[roomName]["socketIDs"][0];
          io.in(roomName).emit('weHaveAwinner',{winner: roomLog[roomName]["winner"]});
          return;
        }
        if(roomLog[roomName]["player2Hand"].length == 0)
        {
          roomLog[roomName]["winner"] = roomLog[roomName]["socketIDs"][1];
          io.in(roomName).emit('weHaveAwinner', {winner: roomLog[roomName]["winner"]});
          return;
        }
      }
    }
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
    roomLog[roomName] = {deck: [], onTableAttack: [], onTableDefense: [], playerTurn:'', moveTurn: '', player1Hand: [], player2Hand: [], socketIDs:[], player1: '', player2: '', attackCounter: 0, attackDefendCheck: {"position0": false, "position1": false, "position2": false, "position3": false, "position4": false, "position5": false, winner: ''}};
    roomLog[roomName]["socketIDs"].push(socket.id);
    roomLog[roomName]["player1"] = socket.id;
    socket.join(roomName);
    io.in(roomName).emit("userJoinedRoom", {name: roomName, roomInfo: roomLog[roomName]});
  });


  socket.on('enterRoom', (data) => {
    let roomName = data["roomName"];
    if(roomLog[roomName])
    {
    let roomObj = io.sockets.adapter.rooms.get(data["roomName"]);
    let socketClients = io.sockets.adapter.rooms.get(data["roomName"]).size;



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
          roomLog[roomName]["player2"] = socket.id;
          socket.join(roomName);
          io.in(roomName).emit('userJoinedRoom', {name: roomName, roomInfo: roomLog[roomName]});
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
  //Notify Player Which player starts
  socket.on('notifyStart', (data) => {
    let roomName = data["roomName"];
    socket.to(roomName).emit('startInfo');
  });
  //leave room
  // ---------- EVERYTHING ABOUT GAME ----------------------------------------
  //Init Game
  socket.on('readyForInitGame', (data) => {
    let roomName = data['roomName'];
    let clientSocketID = socket.id;
    if(roomLog[roomName])
    {

      if(clientSocketID == roomLog[roomName]["player1"])
      {
        socket.emit('initGame', {name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player1Hand"], opponentHand: roomLog[roomName]["player2Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"], attackCounter: roomLog[roomName]["attackCounter"], attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
      }
      else
      {
        socket.emit('initGame', {name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player2Hand"], opponentHand: roomLog[roomName]["player1Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"],  attackCounter: roomLog[roomName]["attackCounter"],
        attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
      }
    }
  });

  socket.on('attackMove', (data) => {
    let roomName = data["roomName"];
    let cardIndex = data["cardIndex"];
    let player = data["player"];

    if(roomLog[roomName])
    {
      if(player == "player1")
      {
        let card = findAndRemoveCardByIndex(roomName, player, cardIndex);
        roomLog[roomName]["onTableAttack"].push(card);
        roomLog[roomName]["attackCounter"] +=  1;
        socket.emit('attackMoveMade',{onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],myHand: roomLog[roomName]["player1Hand"], attackCounter: roomLog[roomName]["attackCounter"]});
        socket.to(roomName).emit('gettingAttacked', {onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"], attackCounter: roomLog[roomName]["attackCounter"]});
        checkWinner(roomName, player);
      }
      else
      {
        let card = findAndRemoveCardByIndex(roomName, player, cardIndex);
        roomLog[roomName]["onTableAttack"].push(card);
        roomLog[roomName]["attackCounter"] +=  1;
        socket.emit('attackMoveMade',{onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],myHand: roomLog[roomName]["player2Hand"], attackCounter: roomLog[roomName]["attackCounter"]});
        socket.to(roomName).emit('gettingAttacked', {onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"], attackCounter: roomLog[roomName]["attackCounter"]});
        checkWinner(roomName, player);
      }
    }
  });

  socket.on('defendMove', (data) => {
    let roomName = data["roomName"];
    let cardIndex = data["cardIndex"];
    let player = data["player"];

    if(roomLog[roomName])
    {
      let card = findAndRemoveCardByIndex(roomName, player, cardIndex);
      setAttackDefendCheck(roomName, card);
      console.log(roomLog[roomName]["onTableDefense"]);
      if(player == "player1")
      {
        socket.emit('defendMoveMade',{onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],myHand: roomLog[roomName]["player1Hand"], attackCounter: roomLog[roomName]["attackCounter"], attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
        socket.to(roomName).emit('gotDefended',{onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"], attackCounter: roomLog[roomName]["attackCounter"], attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
        checkWinner(roomName, player);
      }
      else
      {
        socket.emit('defendMoveMade',{onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],myHand: roomLog[roomName]["player2Hand"], attackCounter: roomLog[roomName]["attackCounter"], attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
        socket.to(roomName).emit('gotDefended',{onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"], attackCounter: roomLog[roomName]["attackCounter"], attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
        checkWinner(roomName, player);
      }
    }
  });

  socket.on('finishRound', (data) => {
    let roomName = data["roomName"];
    let player = data["player"];

    if(roomLog[roomName])
    {
      shuffleCards(roomName);
      resetTablesAndAttackDefenseCheckAndCounter(roomName);
      io.in(roomName).emit('clearTableAfterRound');
      turnToggle(roomName);
      if(player == "player1")
      {
        socket.emit("finishedRound", {name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player1Hand"], opponentHand: roomLog[roomName]["player2Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"], attackCounter: roomLog[roomName]["attackCounter"], attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
        socket.to(roomName).emit("newRound", {name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player2Hand"], opponentHand: roomLog[roomName]["player1Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"],  attackCounter: roomLog[roomName]["attackCounter"],attackDefendCheck: roomLog[roomName]["attackDefendCheck"]})
      }
      else
      {
        socket.emit("finishedRound", {name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player2Hand"], opponentHand: roomLog[roomName]["player1Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"], attackCounter: roomLog[roomName]["attackCounter"], attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
        socket.to(roomName).emit("newRound", {name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player1Hand"], opponentHand: roomLog[roomName]["player2Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"],  attackCounter: roomLog[roomName]["attackCounter"],attackDefendCheck: roomLog[roomName]["attackDefendCheck"]})
      }
    }
  });

  socket.on('drawCardsOnTable', (data) => {
    let roomName = data["roomName"];
    let player = data["player"];
    if(roomLog[roomName])
    {
      drawCardsFromTable(roomName, player);
      shuffleCards(roomName);
      io.in(roomName).emit('clearTableAfterDraw');
      resetTablesAndAttackDefenseCheckAndCounter(roomName);
      if(player == "player1")
      {
        socket.emit('cardsTaken',{name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player1Hand"], opponentHand: roomLog[roomName]["player2Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"], attackCounter: roomLog[roomName]["attackCounter"], attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
        socket.to(roomName).emit('opponentTookCards', {name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player2Hand"], opponentHand: roomLog[roomName]["player1Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"],  attackCounter: roomLog[roomName]["attackCounter"],attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
      }
      else
      {
        socket.emit('cardsTaken',{name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player2Hand"], opponentHand: roomLog[roomName]["player1Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"], attackCounter: roomLog[roomName]["attackCounter"], attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
        socket.to(roomName).emit('opponentTookCards', {name: roomName, deck: roomLog[roomName]["deck"],onTableAttack: roomLog[roomName]["onTableAttack"], onTableDefense: roomLog[roomName]["onTableDefense"],playerTurn: roomLog[roomName]["playerTurn"], moveTurn: roomLog[roomName]["moveTurn"], myHand: roomLog[roomName]["player1Hand"], opponentHand: roomLog[roomName]["player2Hand"].length, player1: roomLog[roomName]["player1"], player2: roomLog[roomName]["player2"],  attackCounter: roomLog[roomName]["attackCounter"],attackDefendCheck: roomLog[roomName]["attackDefendCheck"]});
      }
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
