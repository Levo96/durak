/* ------------------ GAME --------------------- */
let roomLog = {};
let socket = io();
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

/* ---------------------- -errors and log messages---------------------------*/

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
  roomLog["roomName"] = data["name"];
  roomLog["roomInfo"] = data["roomInfo"];
  $('#roomTitle').text('Room: ' + data["name"]);
  $('#roomPlayerCount').text('Players: '+ data["roomInfo"]["socketIDs"].length);
});




/* --------------------------- GAME ----------------------------*/





































/* ----------------GAME START-------------------- */
hideCreateAndJoinRoomContainer();
