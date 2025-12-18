/* **** ANIMATION TEXTE **** */
const text = "Bienvenue sur le site de <br> SARR TECH !"; // Le texte à afficher
const textContainer = document.getElementById("animated-text"); // Conteneur pour le texte
let index = 0;

function typeLetterByLetter() {
  // Vérifie si on rencontre "<br>"
  if (text.substring(index, index + 4) === "<br>") {
    textContainer.innerHTML += "<br>";
    index += 4; // Passe à l'index suivant après "<br>"
  } else {
    // Ajoute la lettre suivante au conteneur
    textContainer.innerHTML += text.charAt(index);
    index++;
  }

  // Continue l'animation si on n'a pas atteint la fin du texte
  if (index < text.length) {
    setTimeout(typeLetterByLetter, 70); // Délai de 100 ms entre chaque lettre
  }
}

// Démarrer l'animation
typeLetterByLetter();

const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
