const movies = [
  {
    title: "Harry Potter",
    explanation: "This movie is about a dude with a stick...",
    hint: "It's Magic",
  },
  {
    title: "Just Go With It",
    explanation: "This movie is about people who go on holiday...",
    hint: "Adam, Drew and Jennifer",
  },
  {
    title: "Never Back Down",
    explanation:
      "This movie is about two guys with daddy issues who beat each other up...",
    hint: "Kanye West - Stronger",
  },
  {
    title: "Spongebob Squarepants",
    explanation: "This movie is about a rectangle...",
    hint: "It's a cartoon",
  },
  {
    title: "50 First Dates",
    explanation: "This movie is about a chick, she has the worst memory...",
    hint: "50 times...",
  },
  {
    title: "Cars",
    explanation: "In this movie, car go fast...",
    hint: "Kachow",
  },
  {
    title: "Spiderman",
    explanation:
      "In this movie this guy just does not pay his rent, no matter how many times the landlord asks...",
    hint: "Peta-Paka",
  },
  {
    title: "The Wolf Of Wall Street",
    explanation:
      "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
    hint: "HAWOOooooooooooo",
  },
  {
    title: "Inception",
    explanation: "In this movie everyone is like sleeping all the time...",
    hint: "Dreams...",
  },
  {
    title: "Peter Pan",
    explanation:
      "In this movie some kids die and an angel escorts them to heaven...",
    hint: "Always flying, cuz he neverlands",
  },
  {
    title: "The Lord Of The Rings",
    explanation: "In this movie some small guys go for a walk...",
    hint: "You will not vacate past this exact position",
  },
  {
    title: "Jaws",
    explanation:
      "This movie is about a really big fish with a taste for humans...",
    hint: "Watch out for the water",
  },
  {
    title: "Titanic",
    explanation: "A lot of people take the Ice Bucket Challenge too far...",
    hint: "Iceberg right ahead!",
  },
  {
    title: "The Lion King",
    explanation:
      "In this movie a young kid runs away from home, eats bugs, then fights a guy with a scar...",
    hint: "Hakuna Matata",
  },
  {
    title: "Forrest Gump",
    explanation:
      "A man tells strangers his life story while waiting for a bus...",
    hint: "Life is like a box of chocolates",
  },
  {
    title: "The Dark Knight",
    explanation:
      "In this movie a billionaire has an identity crisis and fights a clown...",
    hint: "Why so serious?",
  },
];

let currentMovie = Math.floor(Math.random() * movies.length);
let description = document.getElementById("description");
let hint = document.getElementById("hint");
let movieGuess = document.getElementById("movieGuess");
let message = document.getElementById("message");

// display the initial movie description and hint
description.innerHTML = movies[currentMovie].explanation;
hint.innerHTML = "";

function guessMovie() {
  if (!movieGuess.value) {
    alert("Please enter a guess");
    return;
  }

  if (
    movieGuess.value.toLowerCase() === movies[currentMovie].title.toLowerCase()
  ) {
    message.innerHTML = "Congratulations! You guessed the movie correctly.";
  } else {
    message.innerHTML = `Sorry, your guess was wrong. The correct movie was ${movies[currentMovie].title}.`;
  }

  movieGuess.value = "";
  currentMovie = Math.floor(Math.random() * movies.length);
  description.innerHTML = movies[currentMovie].explanation;
  hint.innerHTML = "";
}

function showHint() {
  hint.innerHTML = "Hint: " + movies[currentMovie].hint;
}
