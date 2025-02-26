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
    let random = Math.floor(Math.random() * computerPlay.length)

    computerPlay[random].classList.remove("none")
    computerPlay[random].classList.add("flex")
    
    checkDraw(random)
    checkWin(random)
}

function checkDraw(random) {
    if (play == (random + 1)) {
        message.innerHTML = "Match nul !"
        message.classList.remove("none")
        message.classList.add("flex")
        restart()
    }
}

function checkWin(random) {
    const playerChoice = parseInt(play)

    if (playerChoice === 1 && (random + 1) === 3 || playerChoice === 2 && (random + 1) === 1 || playerChoice === 3 && (random + 1) === 2) {
        message.innerHTML = "Bravo, tu as gagné !"
        message.classList.remove("none")
        message.classList.add("flex")
        restart()
    }
    else if (playerChoice === 1 && (random + 1) === 2 || playerChoice === 2 && (random + 1) === 3 || playerChoice === 3 && (random + 1) === 1) {
        message.innerHTML = "J'ai gagné !"
        message.classList.remove("none")
        message.classList.add("flex")
        restart()
    }
}

function restart() {
    let restart = document.getElementById("restart")
    restart.classList.remove("none")
    restart.classList.add("block")
    restart.addEventListener("click", () => {
        location.reload()
    })
}

playerPlay()