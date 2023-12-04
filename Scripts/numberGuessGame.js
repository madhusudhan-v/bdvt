let secretNumber = generateSecretNumber();
let attempts = 0;

// Get current page URL and display as heading
//document.getElementById('current-url').textContent = window.location.href.substring(0, 30);

function checkGuess() {
    const guessInput = document.getElementById('guess-input');
    const resultDisplay = document.getElementById('result');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        resultDisplay.textContent = 'Please enter a valid number between 1 and 10.';
        resultDisplay.className = 'failure'; // Style change for failure messages
    } else {
        attempts++;

        if (guess === secretNumber) {
            resultDisplay.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
            resultDisplay.className = ''; // Reset style
            secretNumber = generateSecretNumber(); // New secret number for the next game
            attempts = 0; // Reset attempts
            document.getElementById('guess-input').value = ''; // Clear input
        } else if (guess < secretNumber) {
            resultDisplay.textContent = 'Too low! Try again.';
            resultDisplay.className = 'failure'; // Style change for failure messages
        } else {
            resultDisplay.textContent = 'Too high! Try again.';
            resultDisplay.className = 'failure'; // Style change for failure messages
        }
    }
}

function generateSecretNumber() {
    return Math.floor(Math.random() * 10) + 1;
}