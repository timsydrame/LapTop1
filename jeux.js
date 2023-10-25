$(document).ready(function () {
  const INTERVAL_AFFICHER_ICONE_RANDOM = 1100;
  const TEMPS_AFFICHAGE_ICONE_RANDOM = 1000;
  const TEMPS_DE_JEUX = 30000;

  let randomValue;
  let score = 0;

  $("#start-button").click(function () {
    //   Initialisation des variables
    var setIntervalValue = setInterval(
      afficherIconeRandom,
      INTERVAL_AFFICHER_ICONE_RANDOM
    );
    setTimeout(arreterJeux, TEMPS_DE_JEUX, setIntervalValue);
  });

  $("button").click(function () {
    var valeurBtnClick = $(this).val();
    console.log(
      "valeurBtnClick =" + valeurBtnClick + ", randomValue =" + randomValue
    );
    if (valeurBtnClick == randomValue) {
      score++;
      $("#score").val(score);
    }
  });

  function arreterJeux(setIntervalValue) {
    clearInterval(setIntervalValue);
    var userInfos = JSON.parse(localStorage.getItem("userInfos"));
    alert(
      "Jeu terminé. User: " +
        userInfos.nom +
        " " +
        userInfos.prenom +
        " votre score est :" +
        score
    );
    score = 0;
    $("#score").val(score);
  }

  function afficherIconeRandom() {
    randomValue = Math.floor(Math.random() * 9) + 1;
    // console.log("Clique sur la valeur" + randomValue);
    var fasId = "#fas" + randomValue;
    var btnId = "#btn" + randomValue;
    $(btnId).css("background-color", "#0000ff");
    $(fasId).removeClass("fas fa-dice");
    $(fasId).addClass("fas fa-chess-knight");
    setTimeout(cacherIconeRandom, TEMPS_AFFICHAGE_ICONE_RANDOM, fasId, btnId);
  }

  function cacherIconeRandom(fasId, btnId) {
    $(btnId).css("background", "#FFDAB9");
    $(fasId).removeClass("fas fa-chess-knight");
    $(fasId).addClass("fas fa-dice");
  }
});
