let gameMode = ""
let currentPlayer = ""
let player1 = "X"
let player2 = "O"
const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
let message = document.querySelector(".message")
message.style.visibility = "hidden"
let player1Choices = []
let player2Choices = []
let currentPlayerChoices = []
let squares = document.querySelectorAll("#board .square")
let gameOver = false
let countTurns = 0