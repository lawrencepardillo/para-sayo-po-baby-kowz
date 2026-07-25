const welcome = document.getElementById("welcome");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");

const startBtn = document.getElementById("startBtn");
const envelope = document.getElementById("envelope");

const music = document.getElementById("bgMusic");

// Open Gift button
startBtn.addEventListener("click", () => {

    // Play the music
    music.play();

    // Hide the welcome screen
    welcome.classList.add("hidden");

    // Show the envelope screen
    envelopeScreen.classList.remove("hidden");

});

// Envelope click
envelope.addEventListener("click", () => {

    // Hide the envelope
    envelopeScreen.classList.add("hidden");

    // Show the letter
    letterScreen.classList.remove("hidden");

});