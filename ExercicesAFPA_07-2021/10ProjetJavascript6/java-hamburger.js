const btn = document.getElementById('btn')
// Selectionne le bouton //
const nav = document.getElementById('nav')
// Selectionne la nav //


btn.addEventListener("click", () => {
/* Comme vous pouvez le voir, la syntaxe des fonctions fléchées et très concise et cela est normal puisque ce sont des fonctions qui ont été faites pour être déclarées sur une seule et unique ligne.
Les fonctions fléchées n’ont pas besoin du couple d’accolades classique aux fonctions pour fonctionner et n’ont pas besoin non plus d’une expression return puisque celles-ci vont automatiquement évaluer l’expression à droite du signe => et retourner son résultat.
De plus, notez que si notre fonction fléchée n’a besoin que d’un argument pour fonctionner, alors on pourra également omettre le couple de parenthèses. */
    nav.classList.toggle("active");
    // fait sortir la nav //
    btn.classList.toggle("active");
    // déplace l'hamburger (avec la nav) //
});