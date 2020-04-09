var body = window.document
document.addEventListener('DOMContentLoaded',()=>{
    //card options
    const cardArray=[
        {
            name:'burger',
            img:'images/unnamed.png'
        },
        {
            name:'burger',
            img:'images/unnamed.png'
        },
        {
            name:'drink',
            img:'images/drink.png'
        },
        {
            name:'drink',
            img:'images/drink.png'
        },
        {
            name:'chicken',
            img:'images/chicken-cartoon-png-10.png'
        },
        {
            name:'chicken',
            img:'images/chicken-cartoon-png-10.png'
        },
        {
            name:'pizza',
            img:'images/pizza-slice-1661742-1413153.png'
        },
        {
            name:'pizza',
            img:'images/pizza-slice-1661742-1413153.png'
        },
        {
            name:'icecream',
            img:'images/ice-cream-cone-outline-filled.png'
        },
        {
            name:'icecream',
            img:'images/ice-cream-cone-outline-filled.png'
        },
        {
            name:'veg',
            img:'images/veg.png'
        },
        {
            name:'veg',
            img:'images/veg.png'
        },


    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/Candy_Background.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/wgite.png')
        cards[optionTwoId].setAttribute('src', 'images/wgite.png')
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/Candy_Background.png')
        cards[optionTwoId].setAttribute('src', 'images/Candy_Background.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  