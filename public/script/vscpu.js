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
  getCard(index, element)
  {
    propponentCardField.removeChild(propponentCardField.childNodes[index+1]);
    let returnIndex = '';
    let domID = element.getAttribute("dataID");
    let obj = '';
    for(let i = 0; i < this.playerHand.length; i++)
    {
      if(domID == this.playerHand[i]["DomID"])
      {
        returnIndex = i;
        break;
      }
    }

    obj = this.playerHand[returnIndex];
    let tmpPlayerHand = this.playerHand.filter((cards)=> {
      if(cards["DomID"] != obj["DomID"])
      {
        return cards;
      }
    });
    this.playerHand = tmpPlayerHand;
    return obj;
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
    for(let i = 0; i < this.playerHand.lenght; i++)
    {
      if(this.playerHand[i]["jokerSuits"] == false)
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
  //Check that the Card on Table is defendable if not take the cards
  isDefendable(obj)
  {
    let defendBool = false;
    let objRank = obj["rank"];
    if(obj["jokerSuit"])
    {
      if(this.doIHaveAnyJokeSuitCard())
      {
        for(let i = 0; i < this.playerHand.lenght; i++)
        {
          if(this.playerHand[i]["jokerSuit"])
          {
            if(this.playerHand[i]["rank"] > objRank)
            {
              defendBool = true;
              break;
            }
          }
        }
      }
    }
    else
    {
      for(let i = 0; i < this.playerHand.length; i++)
      {
        if(this.playerHand[i]["suit"] == obj["suit"])
        {
          if(this.playerHand[i]["rank"] > objRank)
          {
            defendBool = true;
            break;
          }
        }
      }
    }
    return defendBool;
  }
  getDefendCard(obj)
  {
    let indexOfDefendCard = 0;
    let defendCard = 0;
    let objRank = obj["rank"];
    if(obj["jokerSuit"])
    {
      //find the smallest jokerSuit to play to keep the biggest JokerSuit Card in Hold
      let allJokerSuitCardArr = [];
      for(let i = 0; i < this.playerHand.length; i++)
      {
        if(this.playHand[i]["jokerSuit"])
        {
          allJokerSuitCardArr.push(this.playHand[i]["jokerSuit"]);
        }
      }
      //sort from smallest ranked card to the biggest
      let smallest_ranked = allJokerSuitCardArr.sort((a, b) => {
        return a["rank"] - b["rank"];
      });

      let defendCardId = '';

      for(let i = 0; i < smallest_ranked.lenght; i++)
      {
        if(smallest_ranked[i]["rank"] > objRank)
        {
          defendCardId = smallest_ranked[i]["domID"];
          break;
        }
      }

      for(let i = 0; i < this.playerHand.lenght; i++)
      {
        if(this.playerHand[i]["domID"] == defendCardId)
        {
          indexOfDefendCard = i;
          break;
        }
      }

    }
    else
    {
      let allRegCards = [];
      let smallest_ranked = [];

      for(let i = 0; i < this.playerHand.length; i++)
      {
        if(this.playerHand[i]["suit"] == obj["suit"])
        {
          if(this.playerHand[i]["rank"] > objRank)
          {
            allRegCards.push(this.playerHand[i]);
          }
        }
      }

      let defendCardId = '';

      smallest_ranked = allRegCards.sort((a, b) => {
        return a -b;
      });

      for(let i = 0; i < smallest_ranked.length; i++)
      {
        if(smallest_ranked[i]["rank"] > objRank)
        {
          defendCardId = smallest_ranked[i]["DomID"];
          break;
        }
      }

      for(let i = 0; i < this.playerHand.length; i++)
      {
        if(this.playerHand[i]["DomID"] == defendCardId)
        {
          indexOfDefendCard = i;
          break;
        }
      }

    }
    opponetCardField.removeChild(opponetCardField.childNodes[indexOfDefendCard+1]);
    defendCard = this.playerHand[indexOfDefendCard];
    let newPlayerHand = this.playerHand.filter((cards) => {
      if(cards["DomID"] != defendCard["DomID"])
      {
        return cards
      }
    });
    this.playerHand = newPlayerHand;
    return defendCard;
  }
}


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

  setDefendCardToTable(card,position)
  {
    card["rendered"] = false;
    this.onTableDefense.push(card);
    this.attackDefenseCheck[position] = true;
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

}


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

  findIndexOfDomElement(element)
  {
    var nodes = Array.prototype.slice.call(propponentCardField.children );
    return nodes.indexOf(element);
  }

  initTurn()
  {
    this.turn = "attack";
    this.playerTurn = "pc";
  }

  toggleTurn()
  {
    if(this.playerTurn == "ai")
    {
      this.playerTurn = "pc";
    }
    else if(this.playerTurn == "pc")
    {
      this.playerTurn = "ai";
    }
  }

  checkAttackMove(obj)
  {
    let cardObj = obj;
    if(this.board.onTableAttack.length == 0)
    {
      return true;
    }
    else if(this.board.onTableAttack.length > 0)
    {
      for(let i = 0; i < this.board.onTableAttack.length; i++)
      {
        if(cardObj["value"] == this.board.onTableAttack[i]["value"])
        {
          return true;
        }
      }
    }
    else if(this.board.onTableDefense.length > 0)
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

  handCards()
  {
    if(this.players[0].playerHand.length < 6)
    {
      for(let i = this.players[0].playerHand.length; i < 6;  i++)
      {
        this.players[0].addCard(this.deck.pop());
      }
    }
    if(this.players[1].playerHand.length < 6)
    {
      for(let i = this.players[1].playerHand.length; i < 6; i++)
      {
        this.players[1].addCard(this.deck.pop());
      }
    }
  }

  aiDefendMove()
  {
    let jokerSuits = 0;
    let toDefend = this.board.onTableAttack.length;
    //let regCardsCount
    //let jokerSuitJcardsCount
    if(!true)
    {
      //Defend more aggresive
    }
    else
    {
      let card = ''
      let position = 'position';
      //This needs serious reworking
      /* Can keep this code
        let cardToDefend = this.board.onTableAttack[i]
        let defendCheck = this.players[1].isDefendable(cardToDefend);
        if(defendCheck)
        {
          let aiDefendCard = this.players[1].getDefendCard(cardToDefend);
          this.board.setDefendCardToTable(aiDefendCard, position);
          position = 'position';
        }

      */

      for(let i = 0; i < this.board.onTableAttack.length; i++)
      {
        position +=  i;
        if(this.board.attackDefenseCheck[position] == false && this.board.onTableAttack[i])
        {
          let cardToDefend = this.board.onTableAttack[i]
          let defendCheck = this.players[1].isDefendable(cardToDefend);
          if(defendCheck)
          {
            let aiDefendCard = this.players[1].getDefendCard(cardToDefend);
            this.board.setDefendCardToTable(aiDefendCard, position);
            position = 'position';
          }
        }
        else
        {
          position = 'position';
          continue;
        }
      }
    }
  }

  playerAttackMove(e)
  {
    let cardIndex = this.findIndexOfDomElement(e.target);
    if(this.board.checkAttackCounter())
    {
      let tmpObj = this.players[0].playerHand[cardIndex];
      if(this.checkAttackMove(tmpObj))
      {
        let card = this.players[0].getCard(cardIndex,e.target);
        this.board.setAttackCardToTable(card);
        this.aiDefendMove();
      }
    }
  }

  newRound()
  {
    this.handCards();
    if(this.turn == "attack" && this.playerTurn == "pc")
    {
      let cardDivs = propponentCardField.children;
      for(let i = 0; i < cardDivs.length; i++)
      {
        cardDivs[i].addEventListener('click', function attackMove(e){game.playerAttackMove(e)});
      }
    }
  }

  startGame()
  {
    this.initTurn();
    this.newRound();
  }
}


let game = new Game();
game.startGame();
