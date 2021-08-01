let board = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0;
let symbolsType = ["o", "x"]
let gameOver = false;
// Variáveis do Placar:
let placarPlayer0 = document.getElementById('placar-p0');
let placarPlayer1 = document.getElementById('placar-p1');
placarPlayer0.innerHTML = 0;
placarPlayer1.innerHTML = 0;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HANDLEMOVE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 'position' é a id do target (square) clicado. Ela é recebida de handleClick em interface.js.
function handleMove(position) {

    if (isWin()) {
        // Se isWin() retornar 'true', não será possível continuar jogando (veja handleClick em interface.js).
        return true;

    }

    if (board[position] == ''){

        board[position] = symbolsType[playerTime]

        // Alterna a vez do jogador se isWin() retornar false. Poderia ser escrito com (!isWIn()).
        if (isWin() == false) {
            if (playerTime == 0) {
                playerTime = 1;
            }
            else if (playerTime == 1) {
                playerTime = 0;
            }        
        }
        /*
        Também poderia ser escrito com:
            playerTime = (playerTime = 0)? 1 : 0;
        */
    }

    /* Precisamos do retorno de isWin() [TRUE / FALSE] pois handleMove será lançada como parâmetro
    dentro de handleClick em interface.js */
    return isWin();
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ISWIN <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function isWin() {

    // POssibilidades de vitória. Os números são as posições (id) dos squares.
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (i=0; i < winStates.length; i++) {

        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            /* Precisamos excluir o vazio pois, ao iniciarmos o jogo, há várias sequências de <divs> vazias,
            o que retornaria TRUE. */ 

            // Tivemos um vencedor
            return true;

        }

    }

    // Não tivemos um vencedor
    return false;

}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RESET <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function resetGame() {

    board = ["", "", "", "", "", "", "", "", ""]
    playerTime = 0;
    gameOver = false
    resetSquares(); // em interface.js
    
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PLACAR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function atualizaPlacar () {

    if (isWin())
        if(playerTime == 0) {
            placarPlayer0.innerHTML = parseInt(placarPlayer0.innerHTML) + 1; 
        }
        else {
            placarPlayer1.innerHTML = parseInt(placarPlayer1.innerHTML) + 1;
        }

}


