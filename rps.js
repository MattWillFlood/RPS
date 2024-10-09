const User_IP = document.querySelector("#choice");
const User_choice = document.querySelector("#log");
function log(text, Choice) {
  Choice.innerText = text;
}

const Comp_choice = document.getElementById("log2");
const result = document.getElementById("log3");
const U1 = document.getElementById("U1");
const C1 = document.getElementById("C1");

function output(text, idhash2) {
    idhash2.innerHTML = text;
}

let User_score = 0;
let Comp_score = 0;

User_IP.addEventListener("change", () => {
    Comp_IP = getComputerChoice();
    log(`You played ${User_IP.value}`, User_choice);
    output(`Computer played ${Comp_IP}`, Comp_choice);

    if (User_IP.value == Comp_IP) {
        output("They are the same.\nNobody wins", result)
    } else {
        switch (User_IP.value) {
            case 'Rock':
                (Comp_IP == 'Paper' ? 
                    (output("Paper beats Rock.\nComputer wins!", result), Comp_score++) : 
                    (output("Rock beats Scissors.\nUser wins!", result), User_score++))
                break;
             case 'Paper':
                (Comp_IP == 'Rock' ? 
                    (output("Paper beats Rock.\nUser wins!", result), User_score++) : 
                    (output("Scissors beats Paper.\nComputer wins!", result), Comp_score++))
                break;
             case 'Scissors':
                (Comp_IP == 'Paper' ? 
                    (output("Scissors beats Paper.\nUser wins!", result), User_score++) : 
                    (output("Rock beats Scissors.\nComputer wins!", result), Comp_score++) )
                 break;
          }
    }
    User_IP.value = "";
    output(`User score:   ${User_score}`, U1);
    output(`Computer score:   ${Comp_score}`, C1)
});


function getComputerChoice() {
    let Guess2 = Math.floor(3*Math.random())
    switch (Guess2) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    } 
}