var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;


var choices = ["rock", "paper", "scissor"]

window.onload = function() {
    for (let i = 0; i < 3; i++) {
   // <img id="rock" src ="images/rockimage.svg"> //
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = "Images/" + choices[i] + ".svg";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
   }
}

function selectChoice() {
    you = this.id;  
    document.getElementById ("your-choice").src= "Images/"+ you + ".svg";

    //random opponent imgs
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = "Images/"+ opponent + ".svg";
    
    //check for winner
    if (you == opponent) {
        yourScore +=1;
        opponentScore +=1;
    }

    else {
        if (you == "rock"){
            if (opponent == "scissor") {
                yourScore += 1;

            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }

        else if (you == "scissor"){
            if (opponent == "paper") {
                yourScore += 1;

            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }

        else if (you == "paper"){
            if (opponent == "rock") {
                yourScore += 1;

            }
            else if (opponent == "scissor") {
                opponentScore += 1;
            }
        }
    }
    document.getElementById("opponent-score").innerText = opponentScore;
    document.getElementById("your-score").innerText = yourScore;
}



























