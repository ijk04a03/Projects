document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreEl = document.querySelector('.player-score');
    const computerScoreEl = document.querySelector('.computer-score');
    const roundResultEl = document.querySelector('.round-result');
    const computerResponseEl = document.querySelector('.computer-response');
    const choiceButtons = document.querySelectorAll('.choice');
    const resetButton = document.querySelector('.reset-button');
    let isPlaying = false;
    
    choiceButtons.forEach(btn => btn.addEventListener('click', () => playRound(btn.dataset.choice)));
    resetButton.addEventListener('click', resetGame);

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(playerChoice) {
        if (isPlaying) return;

        isPlaying = true;
        disableChoiceButtons(true);
        roundResultEl.textContent = 'Playing...';
        roundResultEl.parentElement.classList.add('playing');
        computerResponseEl.textContent = '';

        setTimeout(() => {
            const computerChoice = getComputerChoice();
            const result = getRoundResult(playerChoice, computerChoice);

            computerResponseEl.textContent = `Computer chose ${capitalize(computerChoice)}.`;
            roundResultEl.textContent = result.message;
            playerScore = result.playerScore;
            computerScore = result.computerScore;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
            roundResultEl.parentElement.classList.remove('playing');
            isPlaying = false;
            disableChoiceButtons(false);
            checkForMatchEnd();
        }, 600);
    }

    function getRoundResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return {
                message: "It's a tie.",
                playerScore,
                computerScore,
            };
        }

        const playerWins = (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')
        );

        if (playerWins) {
            return {
                message: 'You win this round!',
                playerScore: playerScore + 1,
                computerScore,
            };
        }

        return {
            message: 'Computer wins this round.',
            playerScore,
            computerScore: computerScore + 1,
        };
    }

    function disableChoiceButtons(disabled) {
        choiceButtons.forEach(btn => btn.disabled = true);
    }

    function checkForMatchEnd() {
        const winningScore = 5;
        if (playerScore >= winningScore || computerScore >= winningScore) {
            const winnerText = playerScore > computerScore ? 'You won the game!' : 'Computer won the game.';
            roundResultEl.textContent = winnerText;
            choiceButtons.forEach(b => b.disabled = true);
        }
    }

    function resetGame() {
        playerScore = 0; computerScore = 0;
        isPlaying = false;
        playerScoreEl.textContent = 0; computerScoreEl.textContent = 0;
        roundResultEl.textContent = '';
        computerResponseEl.textContent = '';
        roundResultEl.parentElement.classList.remove('playing');
        choiceButtons.forEach(b => b.disabled = false);
    }

    function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
});