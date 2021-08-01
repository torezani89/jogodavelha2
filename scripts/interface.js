
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ADDEVENTLISTENER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HANDLECLICK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function handleClick(event) {
    // console.log(event.target)
    let square = event.target;
    let position = square.id;

    if(handleMove(position)) {

        // Usams setTimeout para dar tempo de atualizar o square antes de aparecer o Alert.
        setTimeout(() => {
            if(playerTime == 0) {
                alert('Jerry venceu!');
            } else {
                alert('Tom venceu!');
            }
        }, 20)

        atualizaPlacar();
    }

    updateSquare(position);

}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATESQUARE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*
Este updateSquare() atualiza todos os squares. Vamos fazer outro que atualize só o square que foi clicado.
function updateSquares() {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        let position = square.id;
        let symbolSquare = board[position];

        if(symbolSquare != '') {
            square.innerHTML = `<div class='${symbolSquare}'></div>`
        }
    })
}
*/

/*
Em handleClick:
    let square = event.target;
    let position = square.id;
*/
function updateSquare(position) {
    let square = document.getElementById(position.toString())
    // position é um número e precisamos transformá-lo em string para ser usado no getElementById.
    let symbolSquare = board[position]

    square.innerHTML = `<div class='${symbolSquare}'></div>`    

}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RESET SQUARE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function resetSquares() {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.innerHTML = ''
    })
}