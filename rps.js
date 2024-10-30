const RPS = document.querySelector('.rps');
const ROCK = document.createElement('button');
const PAPER = document.createElement('button');
const SCISSORS = document.createElement('button');
const output = document.createElement('p');
const COMP_score = document.createElement("p")
const USER_score = document.createElement("p")

let c_score = 0;
let u_score = 0;

ROCK.textContent = 'ROCK'
PAPER.textContent = 'PAPER'
SCISSORS.textContent = 'SCISSORS'
RPS.appendChild(ROCK)
RPS.appendChild(PAPER)
RPS.appendChild(SCISSORS)

ROCK.addEventListener('click', () => ScoreKeeper('Rock'))
PAPER.addEventListener('click', () => ScoreKeeper('Paper'))
SCISSORS.addEventListener('click', () => ScoreKeeper('Scissors'))

split = document.createElement('div')
split.appendChild(output)
RPS.appendChild(split)

log = document.createElement('p')
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

function ScoreKeeper(USERHAND) {
    let COMPHAND = getComputerChoice();

    if (COMPHAND == USERHAND) {
        output.innerHTML = "They are the same.<br>Nobody wins</br>"
    } else {
        switch (USERHAND) {
            case 'Rock':
                (COMPHAND == 'Paper' ? 
                    (output.innerHTML = "Paper beats Rock.<br>Computer wins!</br>", c_score++ ) : 
                    (output.innerHTML = "Rock beats Scissors.<br>User wins!</br>", u_score++ ))
                break;
             case 'Paper':
                (COMPHAND == 'Rock' ? 
                    (output.innerHTML = "Paper beats Rock.<br>User wins!</br>", u_score++ ) : 
                    (output.innerHTML = "Scissors beats Paper.<br>Computer wins!</br>", c_score++ ))
                break;
             case 'Scissors':
                (COMPHAND == 'Paper' ? 
                    (output.innerHTML = "Scissors beats Paper.<br>User wins!</br>", u_score++ ) : 
                    (output.innerHTML = "Rock beats Scissors.<br>Computer wins!</br>", c_score++ ))
                 break;
          }
    }
    log.innerHTML = (`User Score = ${u_score} <br>Computer Score = ${c_score}</br>`)
    console.log(u_score)
}
