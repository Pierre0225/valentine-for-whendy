const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const card = document.getElementById("card");

// YES button
yesBtn.addEventListener("click", function() {
    card.innerHTML = `
        <h2>Yeheyyy I LOVE YOU SO MUCH BEBIII !!! 💕</h2>
        <p>WALA NANG ATRASAN TO ❤️</p>
        <p>THANKYOU BEBIII!</p>
    `;
    startHearts();
});

// Move NO button but keep inside card
function moveNoButton() {

    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width - 20;
    const maxY = cardRect.height - btnRect.height - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);


// Floating hearts
function startHearts() {
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}
