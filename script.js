
function nextpage() {
    window.location.href = "yes.html";
}

function movebutton() {

    const noButton = document.getElementById('nobutton');

    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "fixed";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
