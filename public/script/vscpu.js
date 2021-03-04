// card Objs
let allCards = [
  {
    rank: 1,
    value: "6",
    suit: "club",
    jokerSuit: false,
    DomID: "club6",
    rendered: false
  },
  {
    rank: 1,
    value: "6",
    suit: "diamond",
    jokerSuit: false,
    DomID: "diamond6",
    rendered: false
  },
  {
    rank: 1,
    value: "6",
    suit: "heart",
    jokerSuit: false,
    DomID: "heart6",
    rendered: false
  },
  {
    rank: 1,
    value: "6",
    suit: "spade",
    jokerSuit: false,
    DomID: "spade6",
    rendered: false
  },
  {
    rank: 2,
    value: "7",
    suit: "club",
    jokerSuit: false,
    DomID: "club7",
    rendered: false
  },
  {
    rank: 2,
    value: "7",
    suit: "diamond",
    jokerSuit: false,
    DomID: "diamond7",
    rendered: false
  },
  {
    rank:2,
    value: "7",
    suit: "heart",
    jokerSuit: false,
    DomID: "heart7",
    rendered: false
  },
  {
    rank: 2,
    value: "7",
    suit: "spade",
    jokerSuit: false,
    DomID: "spade7",
    rendered: false
  },
  {
    rank: 3,
    value: "8",
    suit: "club",
    jokerSuit: false,
    DomID: "club8",
    rendered: false
  },
  {
    rank: 3,
    value: "8",
    suit: "diamond",
    jokerSuit: false,
    DomID: "diamond8",
    rendered: false
  },
  {
    rank: 3,
    value: "8",
    suit: "heart",
    jokerSuit: false,
    DomID: "heart8",
    rendered: false
  },
  {
    rank: 3,
    value: "8",
    suit: "spade",
    jokerSuit: false,
    DomID: "spade8",
    rendered: false
  },
  {
    rank: 4,
    value: "9",
    suit: "club",
    jokerSuit: false,
    DomID: "club9",
    rendered: false
  },
  {
    rank: 4,
    value: "9",
    suit: "diamond",
    jokerSuit: false,
    DomID: "diamond9",
    rendered: false
  },
  {
    rank: 4,
    value: "9",
    suit: "heart",
    jokerSuit: false,
    DomID: "heart9",
    rendered: false
  },
  {
    rank: 4,
    value: "9",
    suit: "spade",
    jokerSuit: false,
    DomID: "spade9",
    rendered: false
  },
  {
    rank: 5,
    value: "10",
    suit: "club",
    jokerSuit: false,
    DomID: "club10",
    rendered: false
  },
  {
    rank: 5,
    value: "10",
    suit: "diamond",
    jokerSuit: false,
    DomID: "diamond10",
    rendered: false
  },
  {
    rank: 5,
    value: "10",
    suit: "heart",
    jokerSuit: false,
    DomID: "heart10",
    rendered: false
  },
  {
    rank: 5,
    value: "10",
    suit: "spade",
    jokerSuit: false,
    DomID: "spade10",
    rendered: false
  },
  {
    rank: 6,
    value: "j",
    suit: "club",
    jokerSuit: false,
    DomID: "clubJ",
    rendered: false
  },
  {
    rank: 6,
    value: "j",
    suit: "diamond",
    jokerSuit: false,
    DomID: "diamondJ",
    rendered: false
  },
  {
    rank: 6,
    value: "j",
    suit: "heart",
    jokerSuit: false,
    DomID: "heartJ",
    rendered: false
  },
  {
    rank: 6,
    value: "j",
    suit: "spade",
    jokerSuit: false,
    DomID: "spadeJ",
    rendered: false
  },
  {
    rank: 7,
    value: "q",
    suit: "club",
    jokerSuit: false,
    DomID: "clubQ",
    rendered: false
  },
  {
    rank: 7,
    value: "q",
    suit: "diamond",
    jokerSuit: false,
    DomID: "diamondQ",
    rendered: false
  },
  {
    rank: 7,
    value: "q",
    suit: "heart",
    jokerSuit: false,
    DomID: "heartQ",
    rendered: false
  },
  {
    rank: 7,
    value: "q",
    suit: "spade",
    jokerSuit: false,
    DomID: "spadeQ",
    rendered: false
  },
  {
    rank: 8,
    value: "k",
    suit: "club",
    jokerSuit: false,
    DomID: "clubK",
    rendered: false
  },
  {
    rank: 8,
    value: "k",
    suit: "diamond",
    jokerSuit: false,
    DomID: "diamondK",
    rendered: false
  },
  {
    rank: 8,
    value: "k",
    suit: "heart",
    jokerSuit: false,
    DomID: "heartK",
    rendered: false
  },
  {
    rank: 8,
    value: "k",
    suit: "spade",
    jokerSuit: false,
    DomID: "spadeK",
    rendered: false
  },
  {
    rank: 9,
    value: "a",
    suit: "club",
    jokerSuit: false,
    DomID: "clubA",
    rendered: false
  },
  {
    rank: 9,
    value: "a",
    suit: "diamond",
    jokerSuit: false,
    DomID: "diamondA",
    rendered: false
  },
  {
    rank: 9,
    value: "a",
    suit: "heart",
    jokerSuit: false,
    DomID: "heartA",
    rendered: false
  },
  {
    rank: 9,
    value: "a",
    suit: "spade",
    jokerSuit: false,
    DomID: "spadeA",
    rendered: false
  }
];
//Player Card Fields
let opponetCardField = document.getElementById('cardsContainerOponent');
let propponentCardField = document.getElementById('cardsContainerProponent');
//Action Buttons
let finishBtn = document.getElementById('finishBtn');
let drawBtn = document.getElementById('drawBtn');
//CardFiels
//This one for last Card /jokerSuit Card
let cardDeckCoverContainer = document.getElementById('cardDeckContainer');
let lastCardHolder = document.getElementById('cardDeckContainer');
let deckCoverCard = document.getElementById('deckCoverCard');
deckCoverCard.style.visibility = "hidden";
let deckCoverTrashCard = document.getElementById('deckCoverCardTrash');
//CardField Attack and Defense Positions
//attack Positions
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
//------------------------------------------------------------------------
//Deck Class
class Deck
{
  // Contructor containing mixedDeck and an Copy of AllCards | (A Copy so the original arrays get uneffected)
  constructor()
  {
    this.mixedDeck = [];
    this.copyOfAllCards = [...allCards];
  }
  //Shuffle Card
  /*
  How this works is simply:
    1) do - while loop do to it atleast once
    2) each iteration the randomIndex : gets a Number between 0 and length of the copyOfAllCards Array
    3) with the randomIndex a random CardObject gets removed from the copyOfAllCards Array and pushed in to mixedDeck Array
    4) The loop and when copyOfAllCards Array length is zero meaning no more Card Objects left
  */
  shuffleCards()
  {
    do
    {
      let randomIndex = Math.floor(Math.random() * (this.copyOfAllCards.length));
      if(randomIndex == 0)
      {
        this.mixedDeck.push((this.copyOfAllCards.splice(0,1))[0]);
      }
      else
      {
        this.mixedDeck.push((this.copyOfAllCards.splice(randomIndex, 1))[0]);
      }
    } while(this.copyOfAllCards.length > 0);
  }


  /*
  This function picks the bottom card / in programmer Terms this card picks the first element of the deck
  array and makes its suit a joker suit
  then it renders the bottom card / the first element of the array into the dome

  */
  startDeck()
  {
    this.shuffleCards();
    deckCoverCard.style.visibility = "visible";
    let jokerSuitVal = this.mixedDeck[0]["suit"];
    for(let i = 0; i < this.mixedDeck.length; i++)
    {
      if(jokerSuitVal == this.mixedDeck[i]["suit"])
      {
        this.mixedDeck[i]["jokerSuit"] = true;
      }
    }
    let jokerSuitCardCover = document.createElement('div');
    jokerSuitCardCover.classList.add('card');
    jokerSuitCardCover.classList.add('jokerSuitCardCover');
    jokerSuitCardCover.setAttribute("id", this.mixedDeck[0]["DomID"]);
    $(lastCardHolder).append(jokerSuitCardCover);
    return this.mixedDeck;
  }
}

// class Player
class Player
{
  //constructor containing name and playerHand
  constructor(name)
  {
    this.name = name;
    this.playerHand = [];
  }
  /* this function goes over this.playerHand and renders each card Object which is not rendered yet into the dom
  of the player Hand / propponentCardField -> DIV
  */
  renderHand()
  {
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["rendered"] == false)
      {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add("card");
        cardDiv.classList.add("myCardHover");
        cardDiv.setAttribute("id", this.playerHand[i]["DomID"]);
        cardDiv.setAttribute("dataID",this.playerHand[i]["DomID"]);
        cardDiv.addEventListener('click', function attackMove(e){game.playerMove(e)});
        $(propponentCardField).append(cardDiv);
        this.playerHand[i]["rendered"] = true;
      }
    }
  }
  //add card to playerHand and renders it to the DOM
  addCard(card)
  {
    this.playerHand.push(card);
    this.renderHand();
  }

  /*
  Gets Card at Index
  Removes it from the DOM
  Removes it from the playerHand array
  playHand array gets a new array without the card that is searched for
  return the searched card
  */
  getCard(index, idStr)
  {
    propponentCardField.removeChild(propponentCardField.childNodes[index+1]);
    let searchedDomId = idStr;
    let cardObj = '';

    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["DomID"] == searchedDomId)
      {
        cardObj = Object.assign({},this.playerHand[i]);
        break;
      }
    }

    let tmpPlayerHand = this.playerHand.filter((cards)=> {
      if(cards["DomID"] != cardObj["DomID"])
      {
        return cards;
      }
    });

    this.playerHand = tmpPlayerHand;
    return cardObj;
  }
}

/*
  I wanted to a own class for AI so that  I dont mix up functions
  and obviously the AiPlayer Class will have more function to help it play proper
*/
class AiPlayer
{
  constructor(name)
  {
    this.name = name;
    this.playerHand = [];
  }
  /*
  adds card
  however renders only the backsite of the card as we the human player are
  only supposed to see the amount of cards the other side has not the card itself
  */
  addCard(card)
  {
    if(card["rendered"] == false)
    {
      let cardDiv = document.createElement('div');
      cardDiv.classList.add("card");
      cardDiv.classList.add("oponentCard");
      $(opponetCardField).append(cardDiv);
      cardDiv["rendered"] = false;
    }
    this.playerHand.push(card);
  }
  //count how many cards the Ai has of jokerSuits
  jokerSuitsCardCount()
  {
    let count = 0;
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["jokerSuit"])
      {
        count += 1;
      }
    }
    return count;
  }
  //count how many cards it has besided jokerSuits cards
  regCardsCount()
  {
    let count = 0;
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["jokerSuit"] == false)
      {
        count += 1;
      }
    }
    return count;
  }

  //Check if the Ai even has any cards currently at Round that are jokerSuits
  doIHaveAnyJokeSuitCard()
  {
    let answer = false;
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["jokerSuit"])
      {
        answer = true;
        break;
      }
    }
    return answer;
  }
  //Check that the Card on Table is defendable
  isDefendable(obj)
  {
    let defendBool = false;
    let cardObj = obj;

    if(cardObj["jokerSuit"])
    {
      if(this.doIHaveAnyJokeSuitCard())
      {
        for(let i = 0; i < this.playerHand.length; i++)
        {
          if(this.playerHand[i]["jokerSuit"] && this.playerHand[i]["rank"] > cardObj["rank"])
          {
            defendBool = true;
            break;
          }
        }
      }
      else
      {
        defendBool = false;
      }
    }
    else
    {
      for(let i = 0; i < this.playerHand.length; i++)
      {
        if(this.playerHand[i]["suit"] == cardObj["suit"] && this.playerHand[i]["rank"] > cardObj["rank"])
        {
          defendBool = true;
          break;
        }
      }
    }
    return defendBool;
  }

  findMinJokerSuitCard(obj)
  {
    let arrayOfJokerSuitsCards = [];
    let sortedArrayOfJokerSuitsCards = [];
    let cardObj = obj;
    let searchedDomId = '';
    let indexDom = 0;
    let resultObj = '';

    //first sort out all joker suits cards
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["jokerSuit"])
      {
        arrayOfJokerSuitsCards.push(this.playerHand[i]);
      }
    }

    //second sort all jokerSuit card from lowest rank to highest
    sortedArrayOfJokerSuitsCards = arrayOfJokerSuitsCards.sort((a, b) => {
      return a["rank"] - b["rank"];
    });

    //third find the object that has higher rank and the same suit
    for(let i = 0; i < sortedArrayOfJokerSuitsCards.length; i++)
    {
      if(sortedArrayOfJokerSuitsCards[i]["rank"] > cardObj["rank"])
      {
        searchedDomId = sortedArrayOfJokerSuitsCards[i]["DomID"];
        break;
      }
    }

    //now find the card by searchedDomId
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["DomID"] == searchedDomId)
      {
        resultObj = this.playerHand[i];
        indexDom = i;
        break;
      }
    }

    //now take out the card out of playerHand array
    let newPlayerHand = this.playerHand.filter((card) => {
      if(card["DomID"] != resultObj["DomID"])
      {
        return card;
      }
    });

    //playerHand Array is now assigned to the new newPlayerHand Array
    this.playerHand = newPlayerHand;
    //remove dom div/card
    opponetCardField.removeChild(opponetCardField.childNodes[indexDom + 1]);
    return resultObj;
  }

  canReAttack(arr1)
  {

    let allCardsOnTableAttackRound = [];
    console.log(" ---| in the AI canReAttack Method |---");
    for(let i = 0; i < arr1.length; i++)
    {
      allCardsOnTableAttackRound.push(arr1[i]);
    }
    console.log(allCardsOnTableAttackRound);
    let canReAttacCheck = false;
    if(allCardsOnTableAttackRound.length == 0)
    {
      canReAttacCheck = true;
    }
    else
    {
      for(let i = 0; i < allCardsOnTableAttackRound.length; i++)
      {
        for(let j = 0; j < this.playerHand.length; j++)
        {
          if(allCardsOnTableAttackRound[i]["value"] == this.playerHand[j]["value"])
          {
            canReAttacCheck = true;
            break;
          }
        }
      }
    }
    return canReAttacCheck;
  }

  findMinRegCard(obj)
  {
    let arrayOfRegularCards = [];
    let sortedArrayOfRegCards = [];
    let cardObj = obj;
    let searchedDomId = '';
    let indexDom = 0;
    let resultObj = '';

    //first sort out all regular cards
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["jokerSuit"] == false)
      {
        arrayOfRegularCards.push(this.playerHand[i]);
      }
    }

    //second sort regular Cards from lowest ranking to the highest
    sortedArrayOfRegCards = arrayOfRegularCards.sort((a, b) => {
      return a["rank"] - b["rank"];
    });

    //third find the object that has higher rank and the same suit
    for(let i = 0; i < sortedArrayOfRegCards.length; i++)
    {
      if(sortedArrayOfRegCards[i]["suit"] == cardObj["suit"] && sortedArrayOfRegCards[i]["rank"] > cardObj["rank"])
      {
        searchedDomId = sortedArrayOfRegCards[i]["DomID"];
        break;
      }
    }

    //now find the card by searchedDomId
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["DomID"] == searchedDomId)
      {
        resultObj = this.playerHand[i];
        indexDom = i;
        break;
      }
    }

    //now take out the card out of playerHand array
    let newPlayerHand = this.playerHand.filter((card) => {
      if(card["DomID"] != resultObj["DomID"])
      {
        return card;
      }
    });

    if(opponetCardField.children.length > 1)
    {
      opponetCardField.removeChild(opponetCardField.childNodes[indexDom + 1]);
    }
    else
    {
      opponetCardField.removeChild(opponetCardField.childNodes[indexDom]);
    }

    this.playerHand = newPlayerHand;
    return resultObj;
  }

  //defend the card that is coming
  getDefendCard(obj)
  {
    let cardObj = obj;
    let returnCard;
    if(cardObj["jokerSuit"])
    {
      returnCard = this.findMinJokerSuitCard(cardObj);
    }
    else
    {
      returnCard = this.findMinRegCard(cardObj);
    }
    return returnCard;
  }

  anyRegCardsLeft()
  {
    let regCardsCounter = this.regCardsCount();
    if(regCardsCounter == 0)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  getAttackCard(arr1)
  {
    let allCardsOnTableAttackRound = [];
    console.log('--- AI getAttackCard Method ---');
    for(let i = 0; i < arr1.length; i++)
    {
      allCardsOnTableAttackRound.push(arr1[i]);
    }

    let rank = 9;
    let domIDSearchStr = '';
    if(allCardsOnTableAttackRound.length == 0)
    {
      if(this.anyRegCardsLeft())
      {
        for(let i = 0; i < this.playerHand.length; i++)
        {
          if(this.playerHand[i]["jokerSuit"] == false && this.playerHand[i]["rank"] <= rank)
          {
            rank = this.playerHand[i]["rank"];
            domIDSearchStr = this.playerHand[i]["DomID"];
          }
        }
      }
      else
      {
        for(let i = 0; i < this.playerHand.length; i++)
        {
          if(this.playerHand[i]["rank"] <= rank)
          {
            rank = this.playerHand[i]["rank"];
            domIDSearchStr = this.playerHand[i]["DomID"];
          }
        }
      }
    }
    else
    {
      for(let i = 0; i < allCardsOnTableAttackRound.length; i++)
      {
        for(let j = 0; j < this.playerHand.length; j++)
        {
          if(this.playerHand[j]["value"] == allCardsOnTableAttackRound[i]["value"])
          {
            domIDSearchStr = this.playerHand[j]["DomID"];
            break;
          }
        }
      }
    }

    let obj = '';
    let indexDom = 0;
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(this.playerHand[i]["DomID"] == domIDSearchStr)
      {
        obj = this.playerHand[i];
        indexDom = i;
        break;
      }
    }

    let newPlayerHand = this.playerHand.filter((card) => {
      if(card["DomID"] != obj["DomID"])
      {
        return card;
      }
    });

    if(opponetCardField.children.length > 1)
    {
        opponetCardField.removeChild(opponetCardField.childNodes[indexDom + 1]);
    }
    else
    {
      opponetCardField.removeChild(opponetCardField.childNodes[indexDom]);
    }

    this.playerHand = newPlayerHand;
    return obj;

  }


} // end of AI class


//class Board
class Board
{
  constructor()
  {
    this.onTableAttack = [];
    this.onTableDefense = [];
    this.attackCount = 0;
    this.attackDefenseCheck = {
      "position0": false,
      "position1": false,
      "position2": false,
      "position3": false,
      "position4": false,
      "position5": false
    };
  }
  //increments how many attacks had happen , max 6
  incrementAttackCount()
  {
    this.attackCount += 1;
  }
  // resets  attack count to zero | maybe neccessary for new round
  resetAttackCount()
  {
    this.attackCount = 0;
  }
  /*
  render each card in the attack or defen array which are not rendered yet to the DOM

  */
  renderBoard()
  {
    if(this.onTableAttack.length > 0)
    {
      for(let i = 0; i < this.onTableAttack.length; i++)
      {
        if(this.onTableAttack[i]["rendered"] == false)
        {
          let cardDiv = document.createElement('div');
          cardDiv.classList.add("card");
          cardDiv.setAttribute("id", this.onTableAttack[i]["DomID"]);
          cardDiv.setAttribute("dataID",this.onTableAttack[i]["DomID"]);
          this.onTableAttack[i]["rendered"] = true;
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

      }
    }
    if(this.onTableDefense.length > 0)
    {
      for(let i = 0; i < this.onTableDefense.length; i++)
      {
        if(this.onTableDefense[i]["rendered"] == false)
        {
          let cardDiv = document.createElement('div');
          cardDiv.classList.add('card');
          cardDiv.setAttribute("id", this.onTableDefense[i]["DomID"]);
          cardDiv.setAttribute("dataID", this.onTableDefense[i]["DomID"]);
          this.onTableDefense[i]["rendered"] = true;
          switch(i)
          {
            case 0: $(defendPosition0).append(cardDiv); break;
            case 1: $(defendPosition1).append(cardDiv); break;
            case 2: $(defendPosition2).append(cardDiv); break;
            case 3: $(defendPosition3).append(cardDiv); break;
            case 4: $(defendPosition4).append(cardDiv); break;
            case 5: $(defendPosition5).append(cardDiv); break;
            default:
          }
        }
      }
    }
  }
  //Sets/Appends Card in the attackArray and renders it
  setAttackCardToTable(card)
  {
    card["rendered"] = false;
    this.onTableAttack.push(card);
    this.incrementAttackCount();
    this.renderBoard();
  }
  //sets card to Defend Table Position
  setDefendCardToTable(card)
  {
    card["rendered"] = false;
    this.onTableDefense.push(card);
    this.renderBoard();
  }

  //to check if attack Counter exceeds 6 max attack = 6
  checkAttackCounter()
  {
    if(this.attackCount < 7)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  // resets the attackDefenseCheck Obj
  resetAttackDefenseCheck()
  {
    for(let x in this.attackDefenseCheck)
    {
      this.attackDefenseCheck[x] = false;
    }
  }
  //resets the whole table : arrays and dom elements
  resetTable()
  {
    this.onTableAttack = [];
    this.onTableDefense = [];
    let allAttackPositionsDom = document.getElementsByClassName('attackPositions');
    let allDefendPositionsDom = document.getElementsByClassName('defendPositions');
    let allAttackDefendDomPositions = [...allAttackPositionsDom, ...allDefendPositionsDom];

    for(let i = 0; i < allAttackDefendDomPositions.length; i++)
    {
      $(allAttackDefendDomPositions).empty();
    }

    this.resetAttackCount();
    this.resetAttackDefenseCheck();
  }

}

//Game Class
class Game
{
  constructor()
  {
    this.turn = "";
    this.playerTurn = "";
    this.lastPlayerTurn = "";
    this.lastPlayerAction = "";
    this.players = [new Player("pc"), new AiPlayer("ai")];
    this.deck = new Deck().startDeck();
    this.board = new Board;
  }
  //finds index by the dom Id
  findCardIndexByDomID(elmnt)
  {
    let domIdStr = elmnt.getAttribute("dataID");
    let index = -1;
    for(let i = 0; i < this.players[0].playerHand.length; i++)
    {
      if(this.players[0].playerHand[i]["DomID"] == domIdStr)
      {
        index = i;
        break;
      }
    }
    return index;
  }
  //sets the start turn for the human player | so the human player always starts against ai
  initTurn()
  {
    this.turn = "attack";
    this.playerTurn = "pc";
  }
  //check if atack reattack move is legit
  checkAttackMove(obj)
  {
    let cardObj = obj;
    if(this.board.onTableAttack.length == 0)
    {
      return true;
    }
    if(this.board.onTableAttack.length > 0)
    {
      for(let i = 0; i < this.board.onTableAttack.length; i++)
      {
        if(cardObj["value"] == this.board.onTableAttack[i]["value"])
        {
          return true;
        }
      }
    }
    if(this.board.onTableDefense.length > 0)
    {
      for(let i = 0; i < this.board.onTableDefense.length; i++)
      {
        if(cardObj["value"] == this.board.onTableDefense[i]["value"])
        {
          return true;
        }
      }
    }
  }

  checkDefendMove(obj)
  {
    let check = false;
    let copyOfCardObj = obj;

    if(this.board.attackDefenseCheck['position0'] == false && this.board.onTableAttack[0])
    {
      if(copyOfCardObj["jokerSuit"] == true && this.board.onTableAttack[0]["jokerSuit"] == false)
      {
        check = true;
      }
      if(copyOfCardObj["joker"] == true && this.board.onTableAttack[0]["jokerSuit"] == true)
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[0]["rank"])
        {
          check = true;
        }
      }
      if(copyOfCardObj["suit"] == this.board.onTableAttack[0]["suit"])
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[0]["rank"])
        {
          check = true;
        }
      }
    }
    if(this.board.attackDefenseCheck['position1'] == false && this.board.onTableAttack[1])
    {
      if(copyOfCardObj["jokerSuit"] == true && this.board.onTableAttack[1]["jokerSuit"] == false)
      {
        check = true;
      }
      if(copyOfCardObj["joker"] == true && this.board.onTableAttack[1]["jokerSuit"] == true)
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[1]["rank"])
        {
          check = true;
        }
      }
      if(copyOfCardObj["suit"] == this.board.onTableAttack[1]["suit"])
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[1]["rank"])
        {
          check = true;
        }
      }
    }
    if(this.board.attackDefenseCheck['position2'] == false && this.board.onTableAttack[2])
    {
      if(copyOfCardObj["jokerSuit"] == true && this.board.onTableAttack[2]["jokerSuit"] == false)
      {
        check = true;
      }
      if(copyOfCardObj["joker"] == true && this.board.onTableAttack[2]["jokerSuit"] == true)
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[2]["rank"])
        {
          check = true;
        }
      }
      if(copyOfCardObj["suit"] == this.board.onTableAttack[2]["suit"])
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[2]["rank"])
        {
          check = true;
        }
      }
    }
    if(this.board.attackDefenseCheck['position3'] == false && this.board.onTableAttack[3])
    {
      if(copyOfCardObj["jokerSuit"] == true && this.board.onTableAttack[3]["jokerSuit"] == false)
      {
        check = true;
      }
      if(copyOfCardObj["joker"] == true && this.board.onTableAttack[3]["jokerSuit"] == true)
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[3]["rank"])
        {
          check = true;
        }
      }
      if(copyOfCardObj["suit"] == this.board.onTableAttack[3]["suit"])
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[3]["rank"])
        {
          check = true;
        }
      }
    }
    if(this.board.attackDefenseCheck['position4'] == false && this.board.onTableAttack[4])
    {
      if(copyOfCardObj["jokerSuit"] == true && this.board.onTableAttack[4]["jokerSuit"] == false)
      {
        check = true;
      }
      if(copyOfCardObj["joker"] == true && this.board.onTableAttack[4]["jokerSuit"] == true)
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[4]["rank"])
        {
          check = true;
        }
      }
      if(copyOfCardObj["suit"] == this.board.onTableAttack[4]["suit"])
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[4]["rank"])
        {
          check = true;
        }
      }
    }
    if(this.board.attackDefenseCheck['position5'] == false && this.board.onTableAttack[5])
    {
      if(copyOfCardObj["jokerSuit"] == true && this.board.onTableAttack[5]["jokerSuit"] == false)
      {
        check = true;
      }
      if(copyOfCardObj["joker"] == true && this.board.onTableAttack[5]["jokerSuit"] == true)
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[5]["rank"])
        {
          check = true;
        }
      }
      if(copyOfCardObj["suit"] == this.board.onTableAttack[5]["suit"])
      {
        if(copyOfCardObj["rank"] > this.board.onTableAttack[5]["rank"])
        {
          check = true;
        }
      }
    }
    return check;
  }

  checkDeckDomRender()
  {
    if(this.deck.length <= 1)
    {
      deckCoverCard.setAttribute("id", "");
      deckCoverCard.style.visibility = "hidden";
    }
    if(this.deck.length == 0)
    {
      document.getElementsByClassName('jokerSuitCardCover')[0].setAttribute("id", "");
      document.getElementsByClassName('jokerSuitCardCover')[0].style.visibility = "hidden";
    }
  }

  //hands cards
  handCards()
  {
    let currentTurn = this.getTurnInfos();
    let currentPlayerTurn = this.getPlayerTurnInfos();
    this.checkDeckDomRender();
    if(this.deck.length > 0)
    {
      let aiPlayerHandLength = this.players[1].playerHand.length;
      let pcPlayerHandLength = this.players[0].playerHand.length;
      if(currentTurn == "attack" && currentPlayerTurn == "pc")
      {
        for(let i = pcPlayerHandLength; i < 6; i++)
        {
          this.players[0].addCard(this.deck.pop());
        }

        for(let i = aiPlayerHandLength; i < 6; i++)
        {
          this.players[1].addCard(this.deck.pop());
        }
      }
      else
      {
        for(let i = aiPlayerHandLength; i < 6; i++)
        {
          this.players[1].addCard(this.deck.pop());
        }

        for(let i = pcPlayerHandLength; i < 6; i++)
        {
          this.players[0].addCard(this.deck.pop());
        }
      }
    }
    this.checkDeckDomRender();
  }
  //calls Ai to Defend Move
  aiDefendMove()
  {
    if(this.board.attackDefenseCheck['position0'] == false && this.board.onTableAttack[0])
    {
      if(this.players[1].isDefendable(this.board.onTableAttack[0]))
      {
        let defendCard = this.players[1].getDefendCard(this.board.onTableAttack[0]);
        this.board.setDefendCardToTable(defendCard);
        this.board.attackDefenseCheck['position0'] = true;
        console.log('---| AI DEFEND MOVE METHOD |---');
        console.log(this.players[1].playerHand);
        this.checkWinner();
      }
      else
      {
        this.aiTakeCard();
        this.startRound();
      }
    }
    if(this.board.attackDefenseCheck['position1'] == false && this.board.onTableAttack[1])
    {
      if(this.players[1].isDefendable(this.board.onTableAttack[1]))
      {
        let defendCard = this.players[1].getDefendCard(this.board.onTableAttack[1]);
        this.board.setDefendCardToTable(defendCard);
        this.board.attackDefenseCheck['position1'] = true;
        this.checkWinner();
      }
      else
      {
        this.aiTakeCard();
        this.startRound();
      }
    }
    if(this.board.attackDefenseCheck['position2'] == false && this.board.onTableAttack[2])
    {
      if(this.players[1].isDefendable(this.board.onTableAttack[2]))
      {
        let defendCard = this.players[1].getDefendCard(this.board.onTableAttack[2]);
        this.board.setDefendCardToTable(defendCard);
        this.board.attackDefenseCheck['position2'] = true;
        this.checkWinner();
      }
      else
      {
        this.aiTakeCard();
        this.startRound();
      }
    }
    if(this.board.attackDefenseCheck['position3'] == false && this.board.onTableAttack[3])
    {
      if(this.players[1].isDefendable(this.board.onTableAttack[3]))
      {
        let defendCard = this.players[1].getDefendCard(this.board.onTableAttack[3]);
        this.board.setDefendCardToTable(defendCard);
        this.board.attackDefenseCheck['position3'] = true;
        this.checkWinner();
      }
      else
      {
        this.aiTakeCard();
        this.startRound();
      }
    }
    if(this.board.attackDefenseCheck['position4'] == false && this.board.onTableAttack[4])
    {
      if(this.players[1].isDefendable(this.board.onTableAttack[4]))
      {
        let defendCard = this.players[1].getDefendCard(this.board.onTableAttack[4]);
        this.board.setDefendCardToTable(defendCard);
        this.board.attackDefenseCheck['position4'] = true;
        this.checkWinner();
      }
      else
      {
        this.aiTakeCard();
        this.startRound();
      }
    }
    if(this.board.attackDefenseCheck['position5'] == false && this.board.onTableAttack[5])
    {
      if(this.players[1].isDefendable(this.board.onTableAttack[5]))
      {
        let defendCard = this.players[1].getDefendCard(this.board.onTableAttack[5]);
        this.board.setDefendCardToTable(defendCard);
        this.board.attackDefenseCheck['position5'] = true;
        this.checkWinner();
      }
      else
      {
        this.aiTakeCard();
        this.startRound();
      }
    }
  }
  //pc player defend attack method to properly defend attacks
  defendAttack(obj)
  {
    let copyObj = obj;
    copyObj["rendered"] = false;
    if(this.board.attackDefenseCheck['position0'] == false && this.board.onTableAttack[0])
    {
      this.board.setDefendCardToTable(copyObj);
      this.board.attackDefenseCheck['position0'] = true;
    }
    if(this.board.attackDefenseCheck['position1'] == false && this.board.onTableAttack[1])
    {
      this.board.setDefendCardToTable(copyObj);
      this.board.attackDefenseCheck['position1'] = true;
    }
    if(this.board.attackDefenseCheck['position2'] == false && this.board.onTableAttack[2])
    {
      this.board.setDefendCardToTable(copyObj);
      this.board.attackDefenseCheck['position2'] = true;
    }
    if(this.board.attackDefenseCheck['position3'] == false && this.board.onTableAttack[3])
    {
      this.board.setDefendCardToTable(copyObj);
      this.board.attackDefenseCheck['position3'] = true;
    }
    if(this.board.attackDefenseCheck['position4'] == false && this.board.onTableAttack[4])
    {
      this.board.setDefendCardToTable(copyObj);
      this.board.attackDefenseCheck['position4'] = true;
    }
    if(this.board.attackDefenseCheck['position5'] == false && this.board.onTableAttack[5])
    {
      this.board.setDefendCardToTable(copy);
      this.board.attackDefenseCheck['position5'] = true;
    }
  }

  //lays an overlay over the page/ table container and makes the page beneath unclickable , stopping the game and shownig winner
  showWinnerOverlay(str)
  {
    let resultOverlay = document.createElement('div');
    resultOverlay.setAttribute("id", "resultOverlay");

    let h1 = document.createElement('h1');
    h1.setAttribute("id", "resultTitle");

    h1.innerHTML = str + " won";

    let restartButton = document.createElement('button');
    restartButton.innerHTML = "restart";
    restartButton.addEventListener('click', function restartGame(){
      resultOverlay.style.display = "none";
      location.reload();
    });

    let exitButton = document.createElement('a');
    exitButton.setAttribute('href', "/");
    exitButton.innerHTML = "exit";

    restartButton.classList.add('resultOverlayBtns')
    exitButton.classList.add('resultOverlayBtns');

    $(resultOverlay).append(h1);
    $(resultOverlay).append(restartButton);
    $(resultOverlay).append(exitButton);

    resultOverlay.style.display = "flex";

    $('#vsCpuPageContainer').append(resultOverlay);
  }
  //checks winner and if there is a winner call showWinnerOverlay() Method
  checkWinner()
  {
    let currentTurn = this.getTurnInfos();
    let currentPlayerTurn = this.getPlayerTurnInfos();
    let deckLength = this.deck.length;

    if(deckLength == 0)
    {
      if(currentTurn == "attack" && currentPlayerTurn == "pc")
      {
        if(this.players[0].playerHand.length == 0)
        {
          this.showWinnerOverlay("you");
        }
        else if(this.players[1].playerHand.length == 0)
        {
          this.showWinnerOverlay('dumb ai');
        }
      }
      else
      {
        if(this.players[1].playerHand.length == 0)
        {
          this.showWinnerOverlay('dumb ai');
        }
        else if(this.players[0].playerHand.length == 0)
        {
          this.showWinnerOverlay('you');
        }
      }
    }

  }
  //playerMove Method for clicking the DOM CARDS
  playerMove(e)
  {
    let cardIndex = this.findCardIndexByDomID(e.target);
    let cardObjCopy = this.players[0].playerHand[cardIndex] //copy of the cardObject
    let currentTurn = this.getTurnInfos();
    let currentPlayerTurn = this.getPlayerTurnInfos();
    if(currentTurn == "attack" && currentPlayerTurn == "pc")
    {
      if(this.board.checkAttackCounter() && this.checkAttackMove(cardObjCopy))
      {
        let card = this.players[0].getCard(cardIndex, cardObjCopy["DomID"]) // get the actual cardObj
        this.board.setAttackCardToTable(card);
        this.checkWinner();
        this.aiDefendMove();
        this.checkWinner();
      }
    }
    if(currentTurn == "attack" && currentPlayerTurn == "ai")
    {
      if(this.checkDefendMove(cardObjCopy))
      {
        let card = this.players[0].getCard(cardIndex, cardObjCopy["DomID"]);
        card["rendered"] = false;
        this.defendAttack(card);
        this.checkWinner();
        this.aiAttackMove();
        this.checkWinner();
      }
    }
  }

  //calls the ai to take all the cards on table
  aiTakeCard()
  {
    let allCardsOnTableCurrent = [...this.board.onTableAttack, ...this.board.onTableDefense];
    for(let i = 0; i < allCardsOnTableCurrent.length; i++)
    {
      allCardsOnTableCurrent[i]["rendered"] = false;
      this.players[1].addCard(allCardsOnTableCurrent[i]);
    }
    this.board.resetTable();
  }

  //switches turn for ai to attack
  toggleTurnToAi()
  {
    this.turn = "attack";
    this.playerTurn = "ai";
  }
  //switches turn for pc to attack
  toggleTurnToPc()
  {
    this.turn = "attack";
    this.playerTurn = "pc";
  }
  //starts Round and hands cards to players
  startRound()
  {
    this.handCards();
  }
  //gets TurnInfos
  getTurnInfos()
  {
    return this.turn;
  }
  //get PlayerTurn Infos
  getPlayerTurnInfos()
  {
    return this.playerTurn;
  }
  //calls player to take all cards on table
  playerTakeCards()
  {
    let cardsToTakeOnTable = [...this.board.onTableAttack, ...this.board.onTableDefense];
    for(let i = 0; i < cardsToTakeOnTable.length; i++)
    {
      cardsToTakeOnTable[i]["rendered"] = false;
      this.players[0].addCard(cardsToTakeOnTable[i]);
    }
    this.board.resetTable();
  }
  //finishes the round for the human player if he's attacking
  playerFinishRound()
  {
    deckCoverCardTrash.style.visibility = "visible";
    this.board.resetTable();
  }
  //calls ai to make a attackMove
  aiAttackMove()
  {
    let arrayTable = [];

    for(let i = 0; i < this.board.onTableAttack.length; i++)
    {
      let tmpObj = Object.assign({}, this.board.onTableAttack[i]);
      tmpObj["rendered"] = false;
      arrayTable.push(tmpObj);
    }

    for(let i = 0; i < this.board.onTableDefense.length; i++)
    {
      let tmpObj = Object.assign({}, this.board.onTableDefense[i]);
      tmpObj["rendered"] = false;
      arrayTable.push(tmpObj);
    }

    if(this.players[1].canReAttack(arrayTable))
    {
      if(this.board.checkAttackCounter())
      {
        let card = this.players[1].getAttackCard(arrayTable);
        this.board.setAttackCardToTable(card);
      }
    }
    else
    {
      if(this.board.onTableAttack.length == this.board.onTableDefense.length)
      {
        this.playerFinishRound();
        this.toggleTurnToPc();
        this.startRound();
      }
    }
  }
  //starts the game
  startGame()
  {
    this.initTurn();
    this.startRound();
  }
}

//GAME
let game = new Game();
game.startGame();

//if cant attack/reattack anymore you have to finish the round
finishBtn.addEventListener('click', () => {
  let turn = game.getTurnInfos();
  let playerTurn = game.getPlayerTurnInfos();


  if(turn == "attack" && playerTurn == "pc")
  {
    if(game.board.onTableAttack.length == game.board.onTableDefense.length)
    {
      game.playerFinishRound();
      game.toggleTurnToAi();
      game.startRound();
      game.aiAttackMove();
      game.checkWinner();
    }
  }
});

//draw btn : in case of no defend you have to take the cards of the table
drawBtn.addEventListener('click', () => {
  let turn = game.getTurnInfos();
  let playerTurn = game.getPlayerTurnInfos();

  if(turn == "attack" && playerTurn == "ai")
  {
    game.playerTakeCards();
    game.startRound();
    game.aiAttackMove();
    game.checkWinner();
  }
});
