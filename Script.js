function playGame(gameName) {
  alert("Launching " + gameName + " 🎮");
}

function scrollToGames() {
  document.getElementById("games").scrollIntoView({
    behavior: "smooth"
  });
}
