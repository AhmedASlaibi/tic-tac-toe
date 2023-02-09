function init() {

const cells = document.querySelectorAll('.cell');
const tttBoard = document.querySelector('.gameboard');
let statusMessage = document.querySelector('.statusprompt');
const playerOne = "X";
const playerTwo = "O";
let currentPlayer = "";
let gameOverState = false;
const restartButton = document.querySelector('.btn');

function clickedCell(player) {
    if (playerOne === currentPlayer) {
        player.target.innerHTML = "<p>X</p>";
        currentPlayer = playerTwo
        console.log('X input')
        winConditionX()
        winConditionO()
    }
    else {
        player.target.innerHTML = "<p>O</p>";
        currentPlayer = playerOne
        console.log('O input')
        winConditionX()
        winConditionO()
}
}

cells.forEach(cell => {
    cell.addEventListener("click", clickedCell);
})

// function clickOnlyOnce(cell) {
//     if (cell.innerHTML === '<p>X</p>' || cell.innerHTML === '<p>O</p>') {
//         return;
// }
// }
   
// function clickOnlyOnce(clickedCell) {
//     document.getElementById(clickedcell).removeAttribute('click');
// }

// function lockClick (cell) {
//     cell.target.removeEventListener('click', lockClick);
// }

function winConditionX() {
    console.log(cells[0])
    if (cells[0].innerHTML === '<p>X</p>' && cells[1].innerHTML === '<p>X</p>' && cells[2].innerHTML === '<p>X</p>') {
        console.log(`X has won`);
        statusMessage.textContent ==='X won';
        //gameOverState = true;
    }
    else if (cells[3].innerHTML === '<p>X</p>' && cells[4].innerHTML === '<p>X</p>' && cells[5].innerHTML === '<p>X</p>') {
        console.log('X has won');
        gameOverState = true;
    }
    else if (cells[6].innerHTML === '<p>X</p>' && cells[7].innerHTML === '<p>X</p>' && cells[8].innerHTML === '<p>X</p>') {
        console.log('X has won');
        gameOverState = true;
    }
    else if (cells[0].innerHTML === '<p>X</p>' && cells[3].innerHTML === '<p>X</p>' && cells[6].innerHTML === '<p>X</p>') {
        console.log('X has won');
        gameOverState = true;
    }
    else if (cells[1].innerHTML === '<p>X</p>' && cells[4].innerHTML === '<p>X</p>' && cells[7].innerHTML === '<p>X</p>') {
        console.log('X has won');
        gameOverState = true;
    }
    else if (cells[2].innerHTML === '<p>X</p>' && cells[5].innerHTML === '<p>X</p>' && cells[8].innerHTML === '<p>X</p>') {
        console.log('X has won');
        gameOverState = true;
    }
    else if (cells[0].innerHTML === '<p>X</p>' && cells[4].innerHTML === '<p>X</p>' && cells[8].innerHTML === '<p>X</p>') {
        console.log('X has won');
        gameOverState = true;
    }
    else if (cells[2].innerHTML === '<p>X</p>' && cells[4].innerHTML === '<p>X</p>' && cells[6].innerHTML === '<p>X</p>') {
        console.log('X has won');
        gameOverState = true;
    }
    if (gameOverState === true){
        cells.forEach(cell => {
            cell.removeEventListener('click', clickedCell)
        })
    }
}

function winConditionO() {
    console.log(cells[0])
    if (cells[0].innerHTML === '<p>O</p>' && cells[1].innerHTML === '<p>O</p>' && cells[2].innerHTML === '<p>O</p>') {
        console.log('O has won');
        gameOverState = true;
        // statusMessage.getElementsByClassName('.statusprompt');
    }
    else if (cells[3].innerHTML === '<p>O</p>' && cells[4].innerHTML === '<p>O</p>' && cells[5].innerHTML === '<p>O</p>') {
        console.log('O has won');
        gameOverState = true;
    }
    else if (cells[6].innerHTML === '<p>O</p>' && cells[7].innerHTML === '<p>O</p>' && cells[8].innerHTML === '<p>O</p>') {
        console.log('O has won');
        gameOverState = true;
    }
    else if (cells[0].innerHTML === '<p>O</p>' && cells[3].innerHTML === '<p>O</p>' && cells[6].innerHTML === '<p>O</p>') {
        console.log('O has won');
        gameOverState = true;
    }
    else if (cells[1].innerHTML === '<p>O</p>' && cells[4].innerHTML === '<p>O</p>' && cells[7].innerHTML === '<p>O</p>') {
        console.log('O has won');
        gameOverState = true;
    }
    else if (cells[2].innerHTML === '<p>O</p>' && cells[5].innerHTML === '<p>O</p>' && cells[8].innerHTML === '<p>O</p>') {
        console.log('O has won');
        gameOverState = true;
    }
    else if (cells[0].innerHTML === '<p>O</p>' && cells[4].innerHTML === '<p>O</p>' && cells[8].innerHTML === '<p>O</p>') {
        console.log('O has won');
        gameOverState = true;
    }
    else if (cells[2].innerHTML === '<p>O</p>' && cells[4].innerHTML === '<p>O</p>' && cells[6].innerHTML === '<p>O</p>') {
        console.log('O has won');
        gameOverState = true;
    }
    if (gameOverState === true){
        cells.forEach(cell => {
            cell.removeEventListener('click', clickedCell)
        })
    }
}

function RestartGame() {
    for( let i =0 ; i<cells.length ; i++){
        cells[i].innerHTML = ''
      }
      gameOverState=false
      statusMessage.innerHTML=''
      cells.forEach(cell => {
        console.log("Game Reset!")
        cells.forEach(cell => {
            cell.addEventListener("click", clickedCell);
        })
    })
        console.log("New game start!")
}

restartButton.addEventListener('click', RestartGame)

}

window.addEventListener('DOMContentLoaded', init)
