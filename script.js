document.getElementById("loveBtn").addEventListener("click", function () {
    document.getElementById("surprise").classList.toggle("hidden");
});

document.getElementById("yesBtn").addEventListener("click", function () {
    document.getElementById("response").innerText = "Yuhh I knew you'd say yes! I love you my beautiful princess! 💕🥰";

    let video = document.getElementById("yesVideo");
    video.classList.remove("hidden"); // Show video
    video.play(); // Auto-play the video

    // Start heart animation
    createHearts();

    // Wait until video finishes, then show the gallery link
    video.onended = function () {
        document.getElementById("galleryContainer").classList.remove("hidden"); // Show link div
    };
});

// Move "No" button when clicked
document.getElementById("noBtn").addEventListener("click", function () {
    const noBtn = document.getElementById("noBtn");

    // Get random position within the window
    let x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    let y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // Move the "No" button
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Function to create floating hearts
function createHearts() {
    const heartsContainer = document.getElementById("hearts-container");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove(); // Remove heart after animation
        }, 5000);
    }, 300); // Create a new heart every 300ms
}

document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bg-music");

    // Try to play music automatically
    bgMusic.play().catch(() => {
        console.log("Autoplay blocked. Waiting for user interaction.");

        // If autoplay is blocked, play after user clicks anywhere
        document.addEventListener("click", function () {
            bgMusic.play();
        }, { once: true }); // Runs only once
    });
});


