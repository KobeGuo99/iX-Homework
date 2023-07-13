let guess = document.getElementById("guess");
let message = document.getElementById("message"); // updated from output to message

function guessNumber() {
  if (!isValid()) {
    alert("Fill in the number");
    return;
  }
  
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (guess.value == randomNumber) {
    message.innerHTML = `Congratulations! You guessed the number right.`; 
  } else {
    message.innerHTML = `Sorry, your guess was wrong. The correct number was ${randomNumber}.`; 
  }

  resetForm();
}

function isValid() {
  return guess.value !== "";
}

function resetForm(){
  guess.value = '';
}

