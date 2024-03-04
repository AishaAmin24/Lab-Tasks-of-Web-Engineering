const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    // Get the user's guess
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);

    // Check if the guess is valid
    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage("Please enter a valid number between 1 and 100", "red");
        return;
    }

    // Compare the guess with the random number
    if (guess === randomNumber) {
        setMessage(`Congratulations! ${randomNumber} is correct!`, "green");
    } else if (guess < randomNumber) {
        setMessage(`Sorry, ${guess} is too low. Try again.`, "red");
    } else {
        setMessage(`Sorry, ${guess} is too high. Try again.`, "red");
    }
}

function setMessage(message, color) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = color;
}