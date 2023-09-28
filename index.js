$(document).ready(function () {
  $("#inputSubmitInfos").click(function (event) {
    var nom = $("#nom").val();
    var prenom = $("#prenom").val();
    console.log(nom);
    localStorage.setItem("userInfos", JSON.stringify({ "nom": nom, "prenom": prenom }));

    // $(location).attr("href", "jeux.html");
    // event.preventDefault();

  });
  
});