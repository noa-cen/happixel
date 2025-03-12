function chooseWord() {
    let i = Math.floor(Math.random() * wordList.length);
    word = wordList[i];

    wordToGuess.innerHTML = word.charAt(0);

    for (let x = 1; x < word.length; x++) {
        wordToGuess.innerHTML += " _";
    }
}

function checkLetter(event) {
    let id = event.target.id;

    event.target.classList.add("disabled");

    if (word.toLowerCase().includes(id)) {
        let displayedWord = wordToGuess.innerHTML.split(" ");
        for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() === id) {
                displayedWord[i] = word[i];
            }
        }
        wordToGuess.innerHTML = displayedWord.join(" ");

        if (!wordToGuess.innerHTML.includes("_")) {
            setTimeout(() => alert("Bravo ! Vous avez gagné !"), 100);
            restart();
            return;
        }
    }
    else {
        if (nbLifes < hangmanLifes.length - 1) {
            hangmanLifes[nbLifes].classList.add("none");
            nbLifes++;
            hangmanLifes[nbLifes].classList.remove("none");
        }
        if (nbLifes === hangmanLifes.length - 1) {
            setTimeout(() => alert(`Dommage ! Le mot était "${word}".`), 100);
            restart();
            return;
        }      
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

function playHangman() {
    nbLifes = 0;

    hangmanLifes.forEach((img, index) => {
        if (index === 0) {
            img.classList.remove("none"); 
        } else {
            img.classList.add("none"); 
        }
    });

    chooseWord();
}

playHangman();