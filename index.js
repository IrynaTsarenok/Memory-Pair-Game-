const cards_array = [
  {
    name: "dog",
    img: "img/free-icon-dog-4540789.png",
  },
  {
    name: "cat",
    img: "img/free-icon-cat-4542300.png",
  },
  {
    name: "bird1",
    img: "img/free-icon-bird-4481369.png",
  },
  {
    name: "cat2",
    img: "img/free-icon-cat-4491118.png",
  },
  {
    name: "dog2",
    img: "img/free-icon-dog-4491212.png",
  },
  {
    name: "hedgehog",
    img: "img/free-icon-hedgehog-1581627.png",
  },

  {
    name: "chameleon",
    img: "img/free-icon-chameleon-4491048.png",
  },
  {
    name: "bird",
    img: "img/free-icon-bird-4491206.png",
  },
  {
    name: "fish",
    img: "img/free-icon-fish-4481250.png",
  },
  {
    name: "paw",
    img: "img/free-icon-paw-1581645.png",
  },
  {
    name: "rabbit",
    img: "img/free-icon-rabbit-4481439.png",
  },
  {
    name: "turtul",
    img: "img/free-icon-turtle-4481225.png",
  },
];

const gameGrid = cards_array
  .concat(cards_array)
  .sort(() => 0.5 - Math.random());

let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById("game");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

gameGrid.forEach((item) => {
  const { name, img } = item;

  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = name;

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});
const match = () => {
  const selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};

const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.remove("selected");
  });
};

grid.addEventListener("click", (event) => {
  const clicked = event.target;

  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match")
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add("selected");
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
// const iconsFirst = "img/free-icon-heart-4782331.png";
