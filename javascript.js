
     // Affichage sur la console pour s'assurer que le code fonctionne correctement
    console.log(portrait);
    //Pour chaque élément du tableau portrait il faut ajouter: si j'étais+le premier élément du tableau...
    portrait.forEach(function afficheNote(portrait){
    console.log("Si j'étais"+portrait);
    console.log("<section><h1>Si j'étais " +portrait+" , je serais " + reponse[numCase] +".</h1> <p>"+description[numCase]+"</p> <img alt='' src= " +images[numCase]+"> </section>");
    //on est entrain de concatener toutes chaque analogie: h1,p,image
    document.querySelector('.liste-analogies').innerHTML = document.querySelector('.liste-analogies').innerHTML+ "<section><h1>Si j'étais " +portrait+" , je serais "+ reponse[numCase] +"</h1><p>"+description[numCase]+"</p> <img alt='' src= " +images[numCase]+"></section>"           
   // numCase nous aide a se deplacer dans le tableau partant du premier element[0] vers le deuxieme element[1] en ajoutant 1
    numCase=numCase+1
  });




//pop up message pour les crédits et les mentions légales

var popup = document.getElementById("popup");

function openPopup(){
  // au moment ou l'on click sur le popup, il s'ouvre "open"
popup.classList.add("open-popup");
}
// au moment ou l'on click sur fermer le popup s'enlève "remove"
function closePopup(){
popup.classList.remove("open-popup");
}

// formulaire
var erreur
var boutton =document.querySelector("#boutton")
boutton.addEventListener('click',function(e){
  var mail=document.querySelector("#mail").value
  var sijetais = document.querySelector("#element1").value; // on recupère toutes les informations saisis par l'utilisateur 
  var jeserais = document.querySelector("#element2").value;
  var parceque = document.querySelector("#element3").value;
  var image=document.querySelector("#element4").value;
  console.log(sijetais);
  console.log(jeserais);
  console.log(parceque);
  console.log(image);

  // ceci permet d'afficher au moment on l'on envoie le formulaire un message " formulaire envoyé"
if (erreur){
  e.preventDefault();
  document.getElementById("erreur").innerHTML=erreur;
  return false;
}
else{
  alert('Formulaire envoyé! clicker sur OK pour voire le résultat');
}
 // affichage des analogies en section en reprenant les variables
  document.querySelector('.liste-analogies').innerHTML = document.querySelector('.liste-analogies').innerHTML+ "<section><h1>Si j'étais " + sijetais +" , je serais "+ jeserais +"</h1><p>"+parceque+"</p> <img alt='' src= " +image +"></section>" 
})

// Envoyer les données du formulaire
data= sijetais + jeserais + parceque + image
boutton.addEventListener('click',function(e){
  var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json"+mail+"&message="+data 
  fetch(urlVisitee).then(function(response) {
  response.json().then(function(data){
      console.log("Réponse reçue : ")
      console.log(data);
  })

})
})






