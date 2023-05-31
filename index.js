let heads = document.getElementById('heads');
let tails = document.getElementById('tails');
let tailsLabel = document.getElementById('tailsLabel');
let headsLabel = document.getElementById('headsLabel');
let count = 0;
let or;
let timeSecond = 5;
let image = document.getElementById('image');
const decision = document.getElementById("decision");
const flipButton = document.getElementById("flip");
if(flipButton) {
console.log("hello");
flipButton.addEventListener("click",flip);
} 

function countdown()  {
    timeSecond = 5;
    decision.innerHTML = "";
    or = random();
    if(or == 1) {
        image.src = 'images/heads.gif';
    }
    else {
       image.src = 'images/tails.gif';
    }
    const countdown = setInterval (() => {
    timeSecond--;
   
    if(timeSecond == 0) {
    clearInterval(countdown);
    if(heads.checked) {
        if(or == 1) {
            decision.style.color = "green";
            decision.innerHTML = "I Flipped Heads, You Win!";
            count++;
        } else {
            decision.style.color = "red";
            decision.innerHTML = "I Flipped Tails, You Lose!";
            count = 0;
        }
    }
    if(tails.checked) {
        if(or == 0) {
            decision.style.color = "green";
            decision.innerHTML = "I Flipped Tails, You Win!";
            count ++;
            console.log("Count" + count);
        } else {
            decision.style.color = "red";
            decision.innerHTML = "I Flipped Heads, You Lose!";
            count = 0;
        }
    }
    visibility(0);   

    }
},1000)
}

function flip() {
    visibility(1);
    if(heads.checked || tails.checked) {
    countdown();
    } 
    else {
        visibility(0);
        decision.style.color = "white";
        decision.innerHTML = "Make Your Decision";
    }
}

function random() {
    let number = Math.random()
    if(number > 0.5) {
        return 1;
    } else {
        return 0;
    }
}
function visibility(param) {
    if(param == 1) {
    flipButton.style = "display:none;"
    document.getElementById('buttons').style = "display:none;"
    } else {
        image.src = "images/default.gif"
        flipButton.style = "display:inline-flex, margin-top: 100px,width: 100px, height:50px;"
        document.getElementById('buttons').style = "display:inline-flex;"
        document.getElementById('streak').innerHTML = 'Win Streak: ' + count;
        
    }
}