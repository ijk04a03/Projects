const gameBoard = (function () {
    let arr = Array(9).fill("");
    return {
        readArr(i) {
            if (Number.isInteger(i) && i > 0 && i <= 9) { return arr[i - 1]; }
            else {
                throw new Error("cell index must be between 1 and 9");
            }
        },
        placeMark(i, mark) {
            if (Number.isInteger(i) && i > 0 && i <= 9) { arr[i - 1] = mark; }
            else {
                throw new Error("cell index must be between 1 and 9");
            }
            updateHTML.update();
        },
        reset() {
            arr = Array(9).fill("");
        },
        displayWholeBoard() {
            return arr;
        }
    }
})();



const playerDetails = (function () {
    let player1 = {
        name: "",
        hasCustomName: false,
        mark: "o",
        number: 1,
        currentlyPlaying: true
    }
    let player2 = {
        name: "",
        hasCustomName: false,
        mark: "x",
        number: 2,
        currentlyPlaying: false
    }
    return {
        switchPlayer() {
            player1.currentlyPlaying = !player1.currentlyPlaying;
            player2.currentlyPlaying = !player2.currentlyPlaying;
        },
        currentPlayer() {
            return (player1.currentlyPlaying) ? player1 : player2;
        },
        setPlayerName(name, num, hasCustomName = false) {
            const player = num === 1 ? player1 : player2;
            player.name = name;
            player.hasCustomName = hasCustomName;
        },
    }
})();


playerDetails.setPlayerName("Player 1", 1);
playerDetails.setPlayerName("Player 2", 2);


const gameController = (function () {
    let winMoves = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];
    let isValidMove = function (i) {
        return gameBoard.readArr(i) === "";
    }
    let gameOver = function () {
        let board = gameBoard.displayWholeBoard();
        let player = playerDetails.currentPlayer();

        for (let move of winMoves) {
            let [a, b, c] = move;
            if (
                board[a - 1] === player.mark &&
                board[b - 1] === player.mark &&
                board[c - 1] === player.mark
            ) {
                return true;
            }
        }
        return false;
    }

    let draw = function () {
        return !gameBoard.displayWholeBoard().includes("") && !gameOver();
    }
    let playRound = function (i) {
        let player = playerDetails.currentPlayer();

        if (!isValidMove(i)) {
            return false;
        }

        gameBoard.placeMark(i, player.mark);

        if (gameOver()) {
            return true;
        } else if (draw()) {
            return true;
        }
        playerDetails.switchPlayer();

        return true;
    };

    let restart = function () {
        gameBoard.reset();
        if (playerDetails.currentPlayer().number !== 1) {
            playerDetails.switchPlayer();
        }
        updateHTML.update();
    }

    return { playRound, restart, gameOver, draw };
})();


let updateHTML = (function () {
    let main = document.querySelector(".container");

    return {
        update() {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            let cellContentArr = gameBoard.displayWholeBoard();

            for (let i in cellContentArr) {
                let cell = document.createElement("div");
                cell.classList.add("cell");
                cell.textContent = cellContentArr[i];
                main.appendChild(cell);
            }
        }
    }
})();

const playerForm = document.querySelector(".player-form");
const boardElement = document.querySelector(".container");
const statusValue = document.querySelector(".status-value");
const statusMarker = document.querySelector(".turn-marker");
const resultMessage = document.querySelector(".result-message");
const playerOneInput = document.querySelector("[name='player-one']");
const playerTwoInput = document.querySelector("[name='player-two']");
const startButton = document.querySelector(".start-button");
let isGameStarted = false;

function getPlayerName(player) {
    return player.hasCustomName ? player.name : "";
}

function renderTurn(message) {
    const currentPlayer = playerDetails.currentPlayer();
    statusValue.textContent = getPlayerName(currentPlayer);
    statusMarker.textContent = currentPlayer.mark.toUpperCase();
    statusMarker.className = `turn-marker marker-${currentPlayer.mark}`;
    resultMessage.className = "result-message";
    resultMessage.textContent = message;
}

function startGame() {
    const playerOneName = playerOneInput.value.trim();
    const playerTwoName = playerTwoInput.value.trim();
    playerDetails.setPlayerName(playerOneName || "Player 1", 1, Boolean(playerOneName));
    playerDetails.setPlayerName(playerTwoName || "Player 2", 2, Boolean(playerTwoName));
    gameController.restart();
    isGameStarted = true;
    startButton.innerHTML = 'Restart game <span aria-hidden="true">↗</span>';
    const playerName = getPlayerName(playerDetails.currentPlayer());
    renderTurn(playerName ? `${playerName}, make your move` : "Make your move");
}

playerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isGameStarted) {
        const playerOneName = playerOneInput.value.trim();
        const playerTwoName = playerTwoInput.value.trim();
        playerDetails.setPlayerName(playerOneName || "Player 1", 1, Boolean(playerOneName));
        playerDetails.setPlayerName(playerTwoName || "Player 2", 2, Boolean(playerTwoName));
        gameController.restart();
        const playerName = getPlayerName(playerDetails.currentPlayer());
        renderTurn(playerName ? `${playerName}, make your move` : "Make your move");
    } else {
        startGame();
    }
});

boardElement.addEventListener("click", (event) => {
    const cell = event.target.closest(".cell");
    if (!cell || !isGameStarted || gameController.gameOver() || gameController.draw()) return;

    const cellIndex = Array.from(boardElement.children).indexOf(cell) + 1;
    const playerWhoMoved = playerDetails.currentPlayer();
    let moveAccepted;

    try {
        moveAccepted = gameController.playRound(cellIndex);
    } catch (error) {
        resultMessage.className = "result-message is-error";
        resultMessage.textContent = error.message;
        return;
    }

    if (!moveAccepted) {
        resultMessage.className = "result-message is-error";
        resultMessage.textContent = "That square is already taken. Choose another.";
        return;
    }

    if (gameController.gameOver()) {
        resultMessage.className = "result-message is-final";
        const playerName = getPlayerName(playerWhoMoved);
        resultMessage.textContent = playerName ? `${playerName} wins!` : `${playerWhoMoved.mark.toUpperCase()} wins!`;
    } else if (gameController.draw()) {
        resultMessage.className = "result-message is-final";
        resultMessage.textContent = "It's a draw!";
    } else {
        const playerName = getPlayerName(playerDetails.currentPlayer());
        renderTurn(playerName ? `${playerName}, make your move` : "Make your move");
    }
});

renderTurn("Enter names and start the game");