let play = ""
let turns = parseInt(localStorage.getItem("turns")) || 0

let nextGameBtn = document.getElementById("nextGame")
let restartBtn = document.getElementById("restart")

function playerPlay() {
    let playerPlay = document.querySelectorAll(".player input")
    let pierre = document.getElementById("pierre")
    let feuille = document.getElementById("feuille")
    let ciseaux = document.getElementById("ciseaux")

    playerPlay.forEach((input) => {
        input.addEventListener("change", (event) => {
            play = event.target.value

            if (play === "1") {
                feuille.classList.add("none")
                ciseaux.classList.add("none")
            }
            else if ( play === "2") {
                pierre.classList.add("none")
                ciseaux.classList.add("none")
            }
            else if (play === "3") {
                feuille.classList.add("none")
                pierre.classList.add("none")
            }
            computerPlay()
        })
    })
}

function computerPlay() {
    let computerPlay = document.querySelectorAll(".computerPlay")
    let happixel = document.getElementById("happixel")
    let random = Math.floor(Math.random() * computerPlay.length)

    computerPlay[random].classList.remove("none")
    computerPlay[random].classList.add("flex")
    happixel.classList.add("none")
    
    checkDraw(random)
}

function checkDraw(random) {
    let playerChoice = parseInt(play)


    if (playerChoice === random + 1) {
        let scorePlayer = parseInt(localStorage.getItem("scorePlayer"))
        let scoreComputer = parseInt(localStorage.getItem("scoreComputer"))

        message.innerHTML = `Toi: ${scorePlayer} Happixel: ${scoreComputer}`
        message.classList.remove("none")
        message.classList.add("flex")

        turns += 1
        localStorage.setItem("turns", turns)

        if (parseInt(localStorage.getItem("turns")) === 3) {
            checkScore()
        }
        else {
            nextGame()
        }
    }
    else {
        checkWin(random)
    }
}

function checkWin(random) {
    let playerChoice = parseInt(play)

    if (playerChoice === 1 && (random + 1) === 3 || playerChoice === 2 && (random + 1) === 1 || playerChoice === 3 && (random + 1) === 2) {
        let scorePlayer = parseInt(localStorage.getItem("scorePlayer"))
        scorePlayer += 1
        localStorage.setItem("scorePlayer", scorePlayer)
        let scoreComputer = parseInt(localStorage.getItem("scoreComputer"))

        message.innerHTML = `Toi: ${scorePlayer} Happixel: ${scoreComputer}`
        message.classList.remove("none")
        message.classList.add("flex")

        turns += 1
        localStorage.setItem("turns", turns)
    }
    
    else if (playerChoice === 1 && (random + 1) === 2 || playerChoice === 2 && (random + 1) === 3 || playerChoice === 3 && (random + 1) === 1) {
        let scoreComputer = parseInt(localStorage.getItem("scoreComputer"))
        scoreComputer += 1
        localStorage.setItem("scoreComputer", scoreComputer)
        let scorePlayer = parseInt(localStorage.getItem("scorePlayer"))

        message.innerHTML = `Toi: ${scorePlayer} Happixel: ${scoreComputer}`
        message.classList.remove("none")
        message.classList.add("flex")

        turns += 1
        localStorage.setItem("turns", turns)
    }

    if (parseInt(localStorage.getItem("turns")) === 3) {
        checkScore()
    }
    else {
        nextGame()
    }
}

function checkScore() {
    let scorePlayer = parseInt(localStorage.getItem("scorePlayer"))
    let scoreComputer = parseInt(localStorage.getItem("scoreComputer"))

    if (scorePlayer > scoreComputer) {
        message.innerHTML = `Bravo, tu as gagné: ${scorePlayer} à ${scoreComputer} !`
    }

    else if (scorePlayer < scoreComputer) {
        message.innerHTML = `Happixel a gagné: ${scoreComputer} à ${scorePlayer}.`
    }

    else {
        message.innerHTML = `Égalité: ${scorePlayer} à ${scoreComputer}.` 
    }

    score.classList.remove("flex")
    score.classList.add("none")

    message.classList.remove("none")
    message.classList.add("flex")

    restart()
}

function nextGame() {
    nextGameBtn.classList.remove("none")
    nextGameBtn.classList.add("block")

    nextGameBtn.removeEventListener("click", reloadGame)
    nextGameBtn.addEventListener("click", reloadGame)
}

function reloadGame() {
    location.reload()
}

function restart() {
    localStorage.removeItem("scoreComputer")
    localStorage.removeItem("scorePlayer")
    localStorage.removeItem("turns")

    nextGameBtn.classList.remove("block")
    nextGameBtn.classList.add("none")

    restartBtn.classList.remove("none")
    restartBtn.classList.add("block")

    restartBtn.addEventListener("click", () => {
        location.reload()
    })
}

function playGame() {
    if (!localStorage.getItem("scorePlayer")) {
        localStorage.setItem("scorePlayer", 0)
        localStorage.setItem("scoreComputer", 0)
    }

    if (!localStorage.getItem("turns")) {
        localStorage.setItem("turns", 0)
    }
    
    turns = parseInt(localStorage.getItem("turns"))
    playerPlay()
}

playGame()