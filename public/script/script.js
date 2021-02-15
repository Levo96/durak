/* ------------------ GAME --------------------- */


/* ----------- DOM  ELEMENTS ------------*/

/* --------------- HOMEPAGE -------------------------------- */

/*--------Containers ------------*/
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
























































/* ----------------GAME START-------------------- */
hideCreateAndJoinRoomContainer();
