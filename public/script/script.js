/* ------------------ GAME --------------------- */
let roomLog = {};
let socket = io();
let mySocketID;
let myHand = [];
let opponentHand = [];
let deck = [];
let myTurn = '';
let whichPlayerAmI = '';

/* ----------- DOM  ELEMENTS --------------------------------------------*/

/* --------------- HOMEPAGE -------------------------------- */

/*--------Containers ------------*/
let homePageContainer = document.getElementById('homePageContainer');
let gameOptionContainer = document.getElementById('OptionButtonContainer');
let createRoomContainer = document.getElementById('createRoomContainer');
let joinRoomContainer = document.getElementById('joinRoomContainer');
let roomContainer = document.getElementById('roomContainer');
/* ---------------------- Buttons --------------- */
let toCreateRoomBtn = document.getElementById('toCreateRoomBtn');
let toJoinRoomBtn = document.getElementById('toJoinRoomBtn');
let vsCpuBtn = document.getElementById('toVsCpuBtn');
let createRoomBtn = document.getElementById('createRoomBtn');
let joinRoomBtn = document.getElementById('joinRoomBtn');
let createRoomBackBtn = document.getElementById('createRoomBackBtn');
let joinRoomBackBtn = document.getElementById('joinRoomBackBtn');
/* -------------------INPUTS --------------------------*/
let createRoomInput = document.getElementById('createRoomInput');
let joinRoomInput = document.getElementById('joinRoomInput');
let openChatBox = document.getElementById('roomChatOpener');
let chatBox = document.getElementById('chatBoxContainer');
let sendMessageBtn = document.getElementById('sendMessageBtn');
let closeChatBoxBtn = document.getElementById('closeChatBoxBtn');

/* --------------- GAMEPAGE/GAME TABLE -------------------------------- */

// ------------ Deck Cards--------------------------------
let deckCardCover = document.getElementById('deckCoverCardTrash');
let lastCardPosition = document.getElementById('cardDeckContainer');
let trashCardCover = document.getElementById('deckCoverCardTrash');

//-----------------playerHand Containers ------------------------
let opponetCardField = document.getElementById('cardsContainerOponent');
let propponentCardField = document.getElementById('cardsContainerProponent');

//---------------------Table Positions ------------------------------
let attackPosition0 = document.getElementById('attackPosition0');
let attackPosition1 = document.getElementById('attackPosition1');
let attackPosition2 = document.getElementById('attackPosition2');
let attackPosition3 = document.getElementById('attackPosition3');
let attackPosition4 = document.getElementById('attackPosition4');
let attackPosition5 = document.getElementById('attackPosition5');
//defend Positions
let defendPosition0 = document.getElementById('defendPosition0');
let defendPosition1 = document.getElementById('defendPosition1');
let defendPosition2 = document.getElementById('defendPosition2');
let defendPosition3 = document.getElementById('defendPosition3');
let defendPosition4 = document.getElementById('defendPosition4');
let defendPosition5 = document.getElementById('defendPosition5');

// ------------- game actions btns -----------------------------
let finishBtn = document.getElementById('finishBtn');
let drawBtn = document.getElementById('drawBtn');

//----------------------functions ----------------------

let findElementIndexById = (idStr) =>
{
  let id = idStr;
  let index = 0;

  for(let i = 0; i < myHand.length; i++)
  {
    if(id == myHand[i]["DomID"])
    {
      index = i;
      break;
    }
  }
  return index;
}

let checkAttackMove = (obj) =>
{
  let check = false;

  if(roomLog["roomInfo"]["onTableAttack"].length == 0)
  {
    check = true;
  }
  else
  {
    let allCardsOnTable = [...roomLog["roomInfo"]["onTableAttack"], ...roomLog["roomInfo"]["onTableDefense"]];

    for(let i = 0; i < allCardsOnTable.length; i++)
    {
      if(obj["value"] == allCardsOnTable[i]["value"])
      {
        check = true;
        break;
      }
    }
  }
  return check;
}

let playerMove = (e) =>
{
  let element = e.target;
  let elementID = element.getAttribute('dataID');
  let cardIndex = findElementIndexById(elementID);
  let card = myHand[cardIndex];
  if(myTurn == "attack")
  {
    if(checkAttackMove(card))
    {
      //socket.emit('playerMove', {roomName: roomLog["roomName"], player: whichPlayerAmI, turn: myTurn, cardID: elementID});
    }
  }
  else
  {

  }
}


let renderMyCards = (obj) =>
{
  if(obj["rendered"] == false)
  {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add("card");
    cardDiv.classList.add("myCardHover");
    cardDiv.setAttribute("id", obj["DomID"]);
    cardDiv.setAttribute("dataID", obj["DomID"]);
    cardDiv.addEventListener('click', function Move(e){playerMove(e)});
    $(propponentCardField).append(cardDiv);
    obj["rendered"] = true;
  }

}

let renderOpponentCards = (obj) =>
{
  if(obj["rendered"] == false)
  {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add("card");
    cardDiv.classList.add("oponentCard");
    $(opponetCardField).append(cardDiv);
    cardDiv["rendered"] = false;
    obj["rendered"] = true;
  }
}

/* ----------HOMEPAGE BASIC NAVIGATION FUNCTIONS ------------- */

let hideCreateAndJoinRoomContainer = () =>
{
  $(createRoomContainer).hide();
  $(joinRoomContainer).hide();
  $(joinRoomInput).val("");
  $(createRoomInput).val("");
}

let hideCreateRoomContainer = () =>
{
  $(createRoomInput).val("");
  $(createRoomContainer).hide();
  $(gameOptionContainer).fadeIn();
}

let hideJoinRoomContainer = () =>
{
  $(joinRoomInput).val("");
  $(joinRoomContainer).hide();
  $(gameOptionContainer).fadeIn();
}

let showCreateRoomContainer = () =>
{
  $(gameOptionContainer).hide();
  $(createRoomContainer).fadeIn();
}

let showJoinRoomContainer = () =>
{
  $(gameOptionContainer).hide();
  $(joinRoomContainer).fadeIn();
}

let showGameRoom = () =>
{
  $(homePageContainer).hide();
  $(roomContainer).fadeIn();
}

$(toCreateRoomBtn).on('click', ()=> {
  showCreateRoomContainer();
});

$(toJoinRoomBtn).on('click', ()=> {
  showJoinRoomContainer();
});

$(createRoomBackBtn).on('click',()=> {
  hideCreateRoomContainer();
});

$(joinRoomBackBtn).on('click',()=> {
  hideJoinRoomContainer();
});

/* ---------------------------------- */
$(openChatBox).on('click', () => {
  $(chatBox).css('display', "flex");

});

$(closeChatBoxBtn).on('click', () => {
  $(chatBox).css('display', 'none');
  $(openChatBox).css('color', 'darkgrey');
});

/*--------------------------------------*/
/* ----- Sending roomInput --------- */

$(createRoomBtn).on('click', ()=> {
  let inputValue = $(createRoomInput).val();
  socket.emit('createRoom', {roomName: inputValue});
  $(createRoomInput).val("");
});

$(joinRoomBtn).on('click', ()=> {
  let inputValue = $(joinRoomInput).val();
  socket.emit('enterRoom', {roomName: inputValue});
  $(joinRoomInput).val("");
});
/* ---------------------- -errors and notification messages---------------------------*/

socket.on('roomName already in use', () => {
  alert("room name already in use");
});

socket.on('room not found', ()=> {
  alert("room not found");
});

socket.on('room empty', ()=> {
  alert('room empty');
});

socket.on('room is full', ()=> {
  alert('room is full');
});


socket.on('startInfo', ()=> {
  alert('other player starts');
});

/* -------------------------------Sending Message ---------------------------------*/
$(sendMessageBtn).on('click', ()=> {
  if($('#messageInput').val() == "") {return;};
  let message = $('#messageInput').val();
  socket.emit("handleMessage", {roomName: roomLog["roomName"], messageString: message});
  $('#messageInput').val("");
});

socket.on('newMessage', (data)=> {
  $(openChatBox).css('color', '#bcfb83');
  $('#chatBox').append('<p> ' + data["message"] + '</p>');
  $('#messageInput').val("");
});



/*----------------Redirect to Table and Chat ------------------- */
socket.on('userJoinedRoom', (data) => {
  showGameRoom();
  socket.emit('getSocketID');
  roomLog["roomName"] = data["name"];
  roomLog["roomInfo"] = data["roomInfo"];
  $('#roomTitle').text('Room: ' + data["name"]);
  $('#roomPlayerCount').text('Players: '+ data["roomInfo"]["socketIDs"].length);
});

socket.on('recieveSocketID', (data)=> {
  mySocketID = data["socketID"];
  if(mySocketID == roomLog["roomInfo"]["player1"])
  {
    whichPlayerAmI = 'player1';
  }
  else
  {
    whichPlayerAmI = 'player2';
  }
});

/* --------------------------- GAME ----------------------------*/
socket.on('loadingGameAssets', (data)=> {
  roomLog["roomName"] = data["name"];
  roomLog["roomInfo"] = data["roomInfo"];
  deck = [...data["roomInfo"]["deck"]];

  let jokerSuitCardCover = document.createElement('div');
  jokerSuitCardCover.classList.add('card');
  jokerSuitCardCover.classList.add('jokerSuitCardCover');
  jokerSuitCardCover.setAttribute("id", deck[0]["DomID"]);
  $(lastCardPosition).append(jokerSuitCardCover);

  socket.emit('readyForInitGame', {roomName: roomLog["roomName"]});
});

socket.on('initGameClient', (data) => {
  roomLog["roomName"] = data["name"];
  roomLog["roomInfo"] = data["roomInfo"];

  myHand = [...data["myHand"]];
  opponentHand = [...data["opponentHand"]];

  for(let i = 0; i < myHand.length; i++)
  {
    renderMyCards(myHand[i]);
  }

  for(let i = 0; i < opponentHand.length; i++)
  {
    renderOpponentCards(opponentHand[i]);
  }

  if(mySocketID == roomLog["roomInfo"]["playerTurn"])
  {
    socket.emit('notifyStart', {roomName: roomLog["roomName"]});
    alert('You start');
    myTurn = 'attack';
  }
  else
  {
    myTurn = 'defense';
  }
});

socket.on('renderTable', (data) => {

});

































/* ----------------GAME START-------------------- */
hideCreateAndJoinRoomContainer();
