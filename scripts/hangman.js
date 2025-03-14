function strNoAccent(a) {
    return a.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

  
function chooseWord() {
    let i = Math.floor(Math.random() * wordList.length);
    let word = wordList[i].toUpperCase();
    wordWithoutAccent = strNoAccent(word);
    wordToGuess.innerHTML = wordWithoutAccent.charAt(0);
    console.log(wordWithoutAccent);

    for (let x = 1; x < wordWithoutAccent.length; x++) {
        wordToGuess.innerHTML += " _";
    }
}

function checkLetter(event) {
    let id = event.target.id;

    event.target.classList.add("disabled");

    if (wordWithoutAccent.toLowerCase().includes(id)) {
        let displayedWord = wordToGuess.innerHTML.split(" ");
        for (let i = 0; i < wordWithoutAccent.length; i++) {
            if (wordWithoutAccent[i].toLowerCase() === id) {
                displayedWord[i] = wordWithoutAccent[i];
            }
        }
        wordToGuess.innerHTML = displayedWord.join(" ");

        if (!wordToGuess.innerHTML.includes("_")) {
            message.innerHTML = "Bravo ! Vous avez gagné !";
            message.classList.remove("none");
            message.classList.add("flex");
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
            message.innerHTML = `Dommage ! Le mot était "${wordWithoutAccent}".`;
            message.classList.remove("none");
            message.classList.add("flex");
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

letters.forEach(letter => {
    letter.addEventListener("click", checkLetter);
});

playHangman();