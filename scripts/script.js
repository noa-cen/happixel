// Fonction menu drop up games
function dropupGames() {
    document.getElementById("dropup-games").classList.toggle("show")
}
let dropupBtnGames = document.getElementById("dropup-btn-games")
dropupBtnGames.addEventListener("click", dropupGames)

// Fonction menu drop up colors
function dropupColors() {
    document.getElementById("dropup-colors").classList.toggle("show")
}
let dropupBtnColors = document.getElementById("dropup-btn-colors")
dropupBtnColors.addEventListener("click", dropupColors)

// Change themes
let colorTogglers = document.querySelectorAll(".fa-brush")
function changeTheme(event) {
    let color = event.currentTarget.id
    document.body.classList.toggle(color)
}
colorTogglers.forEach((toggle) => {
    toggle.addEventListener("click", changeTheme)
})