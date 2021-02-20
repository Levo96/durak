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
class Deck
{
  constructor()
  {
    this.mixedDeck = [];
    this.copyOfAllCards = [...allCards];
  }
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
class Player
{
  constructor(name)
  {
    this.name = name;
    this.playerHand = [];
  }

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
        cardDiv.setAttribute("dataID" this.playerHand[i]["DomID"]);
        $(propponentCardField).append(cardDiv);
        this.playerHand[i]["rendered"] = true;
      }
    }
  }

  addCard(card)
  {
    this.playerHand.push(card);
    this.renderHand();
  }
  getCard(index, element)
  {
    propponentCardField.removeChild(propponentCardField.childNodes[index+1]);
    let returnIndex = 0;
    let domID = element.getAttribute("dataID");
    return domID;
  }
}
class AiPlayer
{
  constructor(name)
  {
    this.name = name;
    this.playerHand = [];
  }
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
}

class Board
{
  constructor()
  {
    this.onTableAttack = [];
    this.onTableDefense = [];
    this.attackCount = 0;
  }

  incrementAttackCount()
  {
    this.attackCount += 1;
  }

  resetAttackCount()
  {
    this.attackCount = 0;
  }

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
          cardDiv.setAttribute("dataID" this.onTableAttack[i]["DomID"]);
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
    }
  }

  setAttackCardToTable(card)
  {
    card["rendered"] = false;
    this.onTableAttack.push(card);
    this.incrementAttackCount();
    this.renderBoard();
  }
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

  playerAttackMove(e)
  {
    let cardIndex = this.findIndexOfDomElement(e.target);
    if(this.board.checkAttackCounter())
    {
      let card = this.players[0].getCard(cardIndex,e.target);
      console.log(card);
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
