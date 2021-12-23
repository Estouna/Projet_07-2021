const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
    // fonction de notification //
});

function createNotification() {
    const notif = document.createElement("div");
    // crée un élément div //
    notif.classList.add("toast");
    // ajoute une classe //
    notif.innerText = "This challenge is crazy!";

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}