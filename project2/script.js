document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const speechBubble = document.getElementById('speechBubble');
    const drinkButton = document.getElementById('drinkButton');
    const drinkSound = document.getElementById('drinkSound');
    
    const messages = [
        "Great job! Keep it up!",
        "Choose sparkling or mineral water over soda.",
        "Stay hydrated!",
        "Sip before every meal.",
        "Drink a glass of water every time you're waiting for coffee to brew.",
        "Water is life!",
        "Cheers to good health!",
        "Drink up for energy!",
        "Hydration is key!",
        "Water your body!",
        "You're on the right track!",
        "Eat water-rich foods.",
        "Another sip, another step!",
        "Stay cool, stay hydrated!",
        "Your body thanks you!",
        "Keep those water levels high!",
        "Every sip counts!",
        "Stay strong, drink water!",
        "Hydrate and feel great!",
        "Get some cool reusable straws.",
        "Water is skin’s best friend.",
        "Drink hot water at night.",
        "Try herbal tea.",
        "Add lots of ice to your drinks and smoothies.",
        "Keep tabs on your bathroom habits."
    ];
  
    function showSpeechBubble() {
        const message = messages[Math.floor(Math.random() * messages.length)];
        speechBubble.textContent = message;
        speechBubble.style.display = 'block';
        setTimeout(() => {
            speechBubble.style.display = 'none';
        }, 10000); 
    }
  
    drinkButton.addEventListener('click', () => {
        const sources = character.getElementsByTagName('source');
        const randomSource = sources[Math.floor(Math.random() * sources.length)].src;
        character.src = randomSource;
        character.load();
        character.play();
        showSpeechBubble();
        drinkSound.play(); // Play the sound effect
    });
  
    character.addEventListener('ended', () => {
        character.pause();
    });
});

let angle = 10;
let lastAngle = 0;
let left = document.getElementsByClassName('leftcircle')[0];
let right = document.getElementsByClassName('rightcircle')[0];

function start() {
    let gap = 0;
    if(angle > 180){
        gap = angle - lastAngle;
    }
    if(angle <= 180){
        right.style.cssText = `transform: rotate(${-135 + angle}deg)`;
    } else if(angle <= 180 + gap) {
        right.style.cssText = `transform: rotate(${-135 + 180}deg)`;
    } else if(angle <= 360) {
        right.style.cssText = `transform: rotate(${-135 + 180}deg)`;
        left.style.cssText = `transform: rotate(${-135 + angle - 180}deg)`;
    } else {
        right.style.cssText = `transform: rotate(${-135 + 180}deg)`;
        left.style.cssText = `transform: rotate(${-135 + 180}deg)`;
    }
    lastAngle = angle;
}

function add() {
    angle += 22;
    start();
}

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
