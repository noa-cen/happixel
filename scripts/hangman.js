let hangmanLifes = document.querySelector(".hangmanLifes");
let wordToGuess = document.querySelector(".wordToGuess");

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

function chooseWord() {
    let i = Math.floor(Math.random() * wordList.length);
    let word = wordList[i];
    //////////////////////////////////////////////////////////////////
    console.log(word);
    wordToGuess.innerHTML = word.charAt(0);
    for (let x = 1; x < word.length; x++) {
        wordToGuess.innerHTML += " _";
    }
}
chooseWord()

function guessLetter() {
    let letter = document.querySelector(".letter");

    if (word.includes(letter)) {
        let position = word.indexOf(letter);
        wordToGuess.innerHTML = word.charAt(position);
    }
}