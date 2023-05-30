let heads = document.getElementById('heads');
let tails = document.getElementById('tails');
let count = 0;
const decision = document.getElementById("decision");
const flipButton = document.getElementById("flip");
if(flipButton) {
console.log("hello");
flipButton.addEventListener("click",flip);
} 
function flip() {
if(heads.checked) {
    if(random() == 1) {
        decision.style.color = "green";
        decision.innerHTML = "I Flipped Heads, You Win!";
        count++;
    } else {
        decision.style.color = "red";
        decision.innerHTML = "I Flipped Tails, You Lose!";
        count = 0;
    }
}
else if(tails.checked) {
    if(random() == 0) {
        decision.style.color = "green";
        decision.innerHTML = "I Flipped Tails, You Win!";
        count ++;
    } else {
        decision.style.color = "red";
        decision.innerHTML = "I Flipped Heads, You Lose!";
        count = 0;
    }
}
else {
    decision.style.color = "white";
    decision.innerHTML = "Make Your Decision";
}
document.getElementById('streak').innerHTML = 'Win Streak: ' + count;
}
function random() {
    let number = Math.random()
    if(number > 0.5) {
        return 1;
    } else {
        return 0;
    }
}