// Fonction menu drop up
function dropup() {
    document.getElementById("dropup").classList.toggle("show")
}
let dropupBtn = document.getElementById("dropup-btn")
dropupBtn.addEventListener("click", dropup)
