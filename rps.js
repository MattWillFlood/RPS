const User_IP = document.querySelector("#choice");
const User_choice = document.querySelector("#log");
function log(text, Choice) {
  Choice.innerText = text;
}

const Comp_choice = document.getElementById("log2");
function printer(text, idhash) {
    idhash.innerHTML = text;
}

const result = document.getElementById("log3");
function output(text, idhash2) {
    idhash2.innerHTML = text;
}

User_IP.addEventListener("change", () => {
    Comp_IP = getComputerChoice();
    log(`You played ${User_IP.value}`, User_choice);
    printer(`Computer played ${Comp_IP}`, Comp_choice);

    if (User_IP.value == Comp_IP) {
        output("They are the same.\nNobody wins", result)
    } else {
        switch (User_IP.value) {
            case 'Rock':
                (Comp_IP == 'Paper' ? 
                    output("Paper beats Rock.\nComputer wins!", result) : 
                    output("Rock beats Scissors.\nUser wins!", result))
                break;
             case 'Paper':
                (Comp_IP == 'Rock' ? 
                    output("Paper beats Rock.\nUser wins!", result) : 
                    output("Scissors beats Paper.\nComputer wins!", result))  
                break;
             case 'Scissors':
                (Comp_IP == 'Paper' ? 
                    output("Scissors beats Paper.\nUser wins!", result) : 
                    output("Rock beats Scissors.\nComputer wins!", result))  
                 break;
          }
    }
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

