/* ------------------ GAME --------------------- */
let roomName = '';
let socket = io();
let mySocketID;
let myHand = [];
let opponentHand = 0;
let deck = [];
let myTurn = '';
let whichPlayerAmI = '';
let onTableAttack = [];
let onTableDefense = [];
let playerTurn = '';
let attackCounter = 0;

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

//----------------------functions -------------------------------

const renderOnTableAttack = (arr) =>
{
  let oldOnTableAttack = [...onTableAttack];
  onTableAttack = [...arr];

  for(let i = 0; i < oldOnTableAttack.length; i++)
  {
    for(let j = 0; j < onTableAttack.length; j++)
    {
      if(oldOnTableAttack[i]["DomID"] == onTableAttack[j]["DomID"])
      {
        if(oldOnTableAttack[i]["rendered"])
        {
          onTableAttack[j]["rendered"] = true;
        }
      }
    }
  }

  for(let i = 0; i < onTableAttack.length; i++)
  {
    if(onTableAttack[i]["rendered"] == false)
    {
      let cardDiv = document.createElement('div');
      cardDiv.classList.add("card");
      cardDiv.setAttribute("id", onTableAttack[i]["DomID"]);
      cardDiv.setAttribute("dataID",onTableAttack[i]["DomID"]);
      onTableAttack[i]["rendered"] = true;
      switch (i) {
        case 0:$(attackPosition0).append(cardDiv);break;
        case 1: $(attackPosition1).append(cardDiv); break;
        case 2: $(attackPosition2).append(cardDiv); break;
        case 3: $(attackPosition3).append(cardDiv); break;
        case 4: $(attackPosition4).append(cardDiv); break;
        case 5: $(attackPosition5).append(cardDiv); break;
        default:
      }
    }
    continue;
  }

}

const findCardObjIndexByID = (idStr) =>
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

const checkAttack = (obj) =>
{
  let allCardsOnTable = [...onTableAttack, ...onTableDefense];
  let check = false;
  let checkObj = obj;


  if(allCardsOnTable.length == 0)
  {
    check = true;
  }
  else
  {
    for(let i = 0; i < allCardsOnTable.length; i++)
    {
      if(checkObj["value"] == allCardsOnTable[i]["value"])
      {
        check = true;
        break;
      }
    }
  }
  return check;
}

const checkAttackCounter = () =>
{
  if(attackCounter < 7)
  {
    return true;
  }
  else
  {
    return false;
  }
}

const playerMove  = (e) =>
{
  let element = e.target;
  let elementID = element.getAttribute("dataID");
  let cardIndex = findCardObjIndexByID(elementID);
  let cardObj = myHand[cardIndex];
  if(myTurn == "ATTACK")
  {

    if(checkAttack(cardObj) && checkAttackCounter())
    {
      socket.emit('attackMove', {roomName: roomName, cardIndex: cardIndex, player: whichPlayerAmI});
      propponentCardField.removeChild(propponentCardField.childNodes[cardIndex+1]);
    }
  }
  else
  {
    
  }
}

const renderMyHand = (arr) =>
{

  let oldMyHand = [...myHand];
  myHand = [...arr];

  for(let i = 0; i < oldMyHand.length; i++)
  {
    for(let j = 0; j < myHand.length; j++)
    {
      if(oldMyHand[i]["DomID"] == myHand[j]["DomID"])
      {
        if(oldMyHand[i]["rendered"])
        {
          myHand[j]["rendered"] = true;
        }
      }
    }
  }

  for(let i = 0; i < myHand.length; i++)
  {
    if(myHand[i]["rendered"] == false)
    {
      let cardDiv = document.createElement("div");
      cardDiv.classList.add('card');
      cardDiv.classList.add('myCardHover');
      cardDiv.setAttribute("id", myHand[i]["DomID"]);
      cardDiv.setAttribute("dataID", myHand[i]["DomID"]);
      cardDiv.addEventListener('click', function cardEvent(e){playerMove(e)});
      $(propponentCardField).append(cardDiv);
      myHand[i]["rendered"] = true;
    }
  }
}


const renderOpponentHand = (handlength) =>
{
  let len = handlength;
  $(opponentHand).empty();
  for(let i = 0; i < len; i++)
  {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add("oponentCard");
    cardDiv.classList.add("card");
    $(opponetCardField).append(cardDiv);
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
  $('#roomTitle').text('Room: ' + data["name"]);
  $('#roomPlayerCount').text('Players: '+ data["roomInfo"]["socketIDs"].length);
});

socket.on('recieveSocketID', (data)=> {
  mySocketID = data["socketID"];
});

/* --------------------------- GAME ----------------------------*/

socket.on("loadingGameAssets", (data) => {
  roomName = data["name"];

  let jokerSuitCardCover = document.createElement('div');
  jokerSuitCardCover.classList.add('card');
  jokerSuitCardCover.classList.add('jokerSuitCardCover');
  jokerSuitCardCover.setAttribute("id", data["roomInfo"]["deck"][0]["DomID"]);
  $(lastCardPosition).append(jokerSuitCardCover);

  socket.emit('readyForInitGame', {roomName: roomName});

});


socket.on('initGame', (data) => {

  roomName = data["name"];
  deck = [...data["deck"]];
  onTableAttack = [...data["onTableAttack"]];
  onTableDefense = [...data["onTableDefense"]];
  playerTurn = data["playerTurn"];

  if(mySocketID == playerTurn)
  {
    myTurn = "ATTACK";
    socket.emit('notifyStart', {roomName: roomName});
  }
  else
  {
    myTurn = "DEFEND";
  }

  myHand = [...data["myHand"]];
  opponentHand = Number(data["opponentHand"]);

  if(mySocketID == data["player1"])
  {
    whichPlayerAmI = "player1";
  }
  else
  {
    whichPlayerAmI = "player2";
  }

  attackCounter = Number(data["attackCounter"]);

  renderMyHand(myHand);
  renderOpponentHand(opponentHand);

  //again to notify start
  if(mySocketID == playerTurn)
  {
    alert("you start");
  }
});


socket.on('attackMoveMade', (data) => {
  renderOnTableAttack(data["onTableAttack"]);
  renderMyHand(data["myHand"]);
  attackCounter = data["attackCounter"];
});


socket.on('gettingAttacked', (data) => {
  renderOnTableAttack(data["onTableAttack"]);
  attackCounter = data["attackCounter"];
  opponetCardField.removeChild(opponetCardField.childNodes[1]);
});

/* ------------------------------------ */
hideCreateAndJoinRoomContainer();
