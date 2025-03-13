// All games
let message = document.getElementById("message")

// Tictactoe
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
let player1Choices = []
let player2Choices = []
let currentPlayerChoices = []
let squares = document.querySelectorAll("#board .square")
let gameOver = false
let countTurns = 0

// Shifumi
let play = ""
let turns = parseInt(localStorage.getItem("turns")) || 0

let nextGameBtn = document.getElementById("nextGame")
let restartBtn = document.getElementById("restart")

// Hangman
let wordList = [
    "Beau", "Bête", "Boxe", "Brun", "Cerf", "Chez", "Cire", "Dame", "Dent", "Dock", "Dodo", "Drap", "Dune", 
    "Emeu", "Fado", "Faux", "Ibis", "Jazz", "Joli", "Joue", "Kaki", "Logo", "Loin", "Long", "Lune", "Lynx", 
    "Mine", "Mûre", "Ouïe", "Ours", "Pion", "Rhum", "Ride", "Rock", "Seau", "Test", "Thym", "Trou", "Truc", 
    "User", "Vert", "Yogi", "Watt", "Accès", "Aimer", "Aloès", "Assez", "Avion", "Balai", "Banjo", "Barbe", 
    "Bonne", "Bruit", "Buche", "Cache", "Capot", "Carte", "Chien", "Crâne", "Cycle", "Ébène", "Essai", 
    "Gifle", "Honni", "Jambe", "Koala", "Livre", "Lourd", "Moult", "Noeud", "Ortie", "Pêche", "Poire", 
    "Pomme", "Poste", "Prune", "Radar", "Radis", "Robot", "Route", "Rugby", "Seuil", "Taupe", "Tenue", 
    "Texte", "Tyran", "Usuel", "Valse", "Acajou", "Agneau", "Alarme", "Ananas", "Angora", "Animal", 
    "Arcade", "Aviron", "Azimut", "Babine", "Balade", "Bonzaï", "Basson", "Billet", "Bouche", "Boucle", 
    "Bronze", "Cabane", "Caïman", "Cloche", "Chèque", "Cirage", "Coccyx", "Crayon", "Garage", "Gospel", 
    "Goulot", "Gramme", "Grelot", "Hochet", "Hormis", "Humour", "Hurler", "Jargon", "Limite", "Lionne", 
    "Menthe", "Oiseau", "Podium", "Poulpe", "Poumon", "Puzzle", "Quartz", "Rapide", "Séisme", "Tétine", 
    "Tomate", "Walabi", "Whisky", "Abriter", "Ballast", "Baryton", "Bassine", "Batavia", "Billard", 
    "Bretzel", "Cithare", "Chariot", "Clairon", "Corbeau", "Cortège", "Crapaud", "Cymbale", "Dentier", 
    "Djembé", "Drapeau", "Exemple", "Fourmis", "Grandir", "Iceberg", "Javelot", "Jockey", "Journal", 
    "Journée", "Jouxter", "Losange", "Macadam", "Mondial", "Notable", "Oxygène", "Panique", "Pétrole", 
    "Poterie", "Pouvoir", "Renégat", "Scooter", "Senteur", "Sifflet", "Spirale", "Sucette", "Strophe", 
    "Tonneau", "Trousse", "Tunique", "Ukulélé", "Vautour", "Zozoter", "Aquarium", "Araignée", "Arbalète", 
    "Archipel", "Banquise", "Batterie", "Brocante", "Brouhaha", "Capeline", "Clavecin", "Cloporte", "Débutant", 
    "Diapason", "Gangster", "Gothique", "Hautbois", "Hérisson", "Logiciel", "Objectif", "Paranoïa", "Parcours", 
    "Pastiche", "Question", "Quetsche", "Scarabée", "Scorpion", "Symptôme", "Tabouret", "Toujours", "Tourisme", 
    "Triangle", "Utopique", "Zeppelin", "Accordéon", "Ascenseur", "Ascension", "Aseptiser", "Autoroute", 
    "Avalanche", "Bilboquet", "Bourricot", "Brillance", "Cabriolet", "Contrario", "Cornemuse", "Dangereux", 
    "Épluchage", "Féodalité", "Forteresse", "Gondolier", "Graphique", "Horoscope", "Intrépide", "Klaxonner", 
    "Mascarade", "Métaphore", "Narrateur", "Péripétie", "Populaire", "Printemps", "Quémander", "Tambourin", 
    "Vestiaire", "Xylophone" ];

let hangmanLifes = document.querySelectorAll(".lifes");
let wordToGuess = document.querySelector(".wordToGuess");
let word;
let nbLifes = 0;
let letters = document.querySelectorAll(".letter");