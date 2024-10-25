const RPS = document.querySelector('.rps');
const ROCK = document.createElement('button');
const PAPER = document.createElement('button');
const SCISSORS = document.createElement('button');
const output = document.createElement('p');
let COMP_score = document.createElement("p")
let USER_score = document.createElement("p")

ROCK.textContent = 'ROCK'
PAPER.textContent = 'PAPER'
SCISSORS.textContent = 'SCISSORS'

RPS.appendChild(ROCK)
RPS.appendChild(PAPER)
RPS.appendChild(SCISSORS)

split = document.createElement('div')
split.appendChild(output)
RPS.appendChild(split)

COMP_score.innerHTML = 0;
USER_score.innerHTML = 0;

ROCK.addEventListener('click', () => ScoreKeeper(COMP_score, USER_score, 'Rock'))
PAPER.addEventListener('click', () => ScoreKeeper(COMP_score, USER_score, 'Paper'))
SCISSORS.addEventListener('click', () => ScoreKeeper(COMP_score, USER_score, 'Scissors'))

log = document.createElement('p')
log.innerHTML = (`User Score = ${USER_score.textContent}  \t\t\t\t\t\t Computer Score = ${COMP_score.textContent}`)
split.appendChild(log)

function getComputerChoice() {
    let Guess = Math.floor(3*Math.random())
    switch (Guess) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    } 
}

function ScoreKeeper(COMP_score, USER_score, USERHAND) {
    let COMPHAND = getComputerChoice();

    if (COMPHAND == USERHAND) {
        output.innerHTML = "They are the same.\nNobody wins"
    } else {
        switch (USERHAND) {
            case 'Rock':
                (COMPHAND == 'Paper' ? 
                    (output.innerHTML = "Paper beats Rock.\nComputer wins!", COMP_score.innerHTML+=1 ) : 
                    (output.innerHTML = "Rock beats Scissors.\nUser wins!", USER_score.innerHTML+=1 ))
                break;
             case 'Paper':
                (COMPHAND == 'Rock' ? 
                    (output.innerHTML = "Paper beats Rock.\nUser wins!", USER_score.innerHTML+=1) : 
                    (output.innerHTML = "Scissors beats Paper.\nComputer wins!", COMP_score.innerHTML+=1))
                break;
             case 'Scissors':
                (COMPHAND == 'Paper' ? 
                    (output.innerHTML = "Scissors beats Paper.\nUser wins!", USER_score.innerHTML+=1) : 
                    (output.innerHTML = "Rock beats Scissors.\nComputer wins!", COMP_score.innerHTML+=1))
                 break;
          }
    }
}



/*

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


*/