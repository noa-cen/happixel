function chooseGameMode() {
    let chooseGameMode = document.querySelectorAll(".gameMode input")
    let rules = document.querySelector(".rules")

    chooseGameMode.forEach((input) => {
        input.addEventListener("change", (event) => {
            gameMode = event.target.value

            let choosePlayerSign = document.getElementById("choosePlayerSign")
            let VScomputer = document.getElementById("VScomputer")
            let VSfriend = document.getElementById("VSfriend")

            if (gameMode === "1") {
                choosePlayerSign.classList.remove("none")
                choosePlayerSign.classList.add("flex")
                VSfriend.classList.add("none")
            } else if (gameMode === "2") {
                buildBoard()
                currentPlayer = player1
                message.classList.remove("none")
                message.classList.add("flex")
                VScomputer.classList.add("none")
                message.innerHTML = `Joueur: ${player1}`
            }
            rules.classList.add("none")
        })
    })
}

function choosePlayerSign() {
    let playerSigns = document.querySelectorAll(".playerSign input")
    let Xsign = document.getElementById("Xsign")
    let Osign = document.getElementById("Osign")

    playerSigns.forEach((input) => {
        input.addEventListener("change", (event) => {
            player1 = event.target.value

            if (player1 === "X") {
                player2 = "O"
                Osign.classList.add("none")

            } else if (player1 === "O") {
                player2 = "X"
                Xsign.classList.add("none")
            }

            buildBoard()
            currentPlayer = player1
            message.classList.remove("none")
            message.classList.add("flex")
            message.innerHTML = `Joueur: ${player1}`
        })
    })
}

function buildBoard() {
    document.getElementById("board").style.visibility="visible"
}

function checkDraw(countTurns) {
    if (countTurns == 9) {
        message.innerHTML = "Match nul !"
        return true
    }
    return false
}

function checkWin(currentPlayerChoices, currentPlayer) {
    for (let i = 0; i < wins.length; i++) {
        if (wins[i].every(index => currentPlayerChoices.includes(index))) {
            message.innerHTML = `Joueur ${currentPlayer} a gagné !`
            return true
        }
    }
    return false
}

function computerPlay() {
    if (attackComputerMove(player1Choices ,player2Choices) === false) {
        if (defenseComputerMove(player1Choices ,player2Choices) === false) {
             randomComputerMove()
        }
    }

    if (checkWin(player2Choices , player2)) {
        gameOver = true
        restart()
        return
    } 
    
    countTurns++
    if (checkDraw(countTurns)) {
        gameOver = true
        restart()
        return
    }

    message.innerHTML = `Joueur: ${player1}`  
    currentPlayer = player1
}

function attackComputerMove(player1Choices ,player2Choices) {
    for (let combo of wins) {
        let computerCount = combo.filter(num => player2Choices.includes(num)).length
        let emptySpot = combo.find(num => !player2Choices.includes(num) && !player1Choices.includes(num))

        if (computerCount === 2 && emptySpot !== undefined) {
            let square = document.getElementById(emptySpot)
            if (square) {
                square.innerHTML = player2
                player2Choices.push(emptySpot)
                return true
            }
        }
    }
    return false
}

function defenseComputerMove(player1Choices ,player2Choices) {
    for (let combo of wins) {
        let playerCount = combo.filter(num => player1Choices.includes(num)).length
        let emptySpot = combo.find(num => !player1Choices.includes(num) && !player2Choices.includes(num))

        if (playerCount === 2 && emptySpot !== undefined) {
            let square = document.getElementById(emptySpot)
            if (square) {
                square.innerHTML = player2
                player2Choices.push(emptySpot)
                return true
            }
        }
    }
    return false
}

function randomComputerMove() {
    let emptySquares = []
    squares.forEach((square) => {
        if (square.textContent === "") {
            emptySquares.push(square)
        }
    })
    let i = Math.floor(Math.random() * emptySquares.length)

    if (emptySquares.length === 0) {
        return
    }

    emptySquares[i].innerHTML = player2
    player2Choices.push(Number(emptySquares[i].id))
}

function turnGame(event) {
    if (gameOver) {
        return
    } 
    if (gameMode === "1" && currentPlayer !== player1) {
        return
    }

    let square = event.target;

    if (currentPlayer === player1) {
        square.innerHTML = player1
        player1Choices.push(Number(square.id))
        if (checkWin(player1Choices, player1)) {
            gameOver = true
            restart()
            return
        }
    } else {
        square.innerHTML = player2
        player2Choices.push(Number(square.id))
        if (checkWin(player2Choices, player2)) {
            gameOver = true
            restart()
            return
        }
    }

    countTurns++
    if (checkDraw(countTurns)) {
        gameOver = true
        restart()
        return
    }

    if (gameMode === "1") {
        currentPlayer = player2;
        message.innerHTML = `Joueur: ${player2}`;
        setTimeout(() => {
            if (!gameOver) {
                computerPlay();
            }
        }, 500);
    } else {
        if (currentPlayer === player1) {
            currentPlayer = player2;
            message.innerHTML = `Joueur: ${player2}`
        } else {
            currentPlayer = player1;
            message.innerHTML = `Joueur: ${player1}`
        }
    }
}

function game() {
    if (gameMode === "1") {
        currentPlayer = player1;
        message.innerHTML = `Joueur: ${player1}`
    }
    squares.forEach((square) => {
        square.addEventListener("click", turnGame)
    })
}

function restart() {
    let restart = document.getElementById("restart")
    if (gameOver) {
        restart.classList.remove("none")
        restart.classList.add("block")
        restart.addEventListener("click", () => {
            location.reload()
        })
    }
}

function playGame() {
    chooseGameMode()
    choosePlayerSign()
    setTimeout(() => {
        game()
    }, 1000)
}

playGame()