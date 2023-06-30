const gameBoard = document.querySelector('#gameboard');
const playerDisplay = document.querySelector('#player');
const infoDisplay = document.querySelector('#info-display')
const width = 8

const startPieces = [
    brook , bknight , bbishop , bking , bqueen , bbishop , bknight , brook ,
    bpawn , bpawn , bpawn , bpawn , bpawn , bpawn , bpawn , bpawn , bpawn ,
    '' , '' , '' , '' , '' , '' , '' , '' , 
    '' , '' , '' , '' , '' , '' , '' , '' ,
    '' , '' , '' , '' , '' , '' , '' , '' ,
    '' , '' , '' , '' , '' , '' , '' , '' ,
    wpawn , wpawn , wpawn , wpawn , wpawn , wpawn , wpawn , wpawn , wpawn,
    wrook , wknight , wbishop , wking , wqueen , wbishop , wknight , wrook 

]

let x = 0

function creatBoard() {
    startPieces.forEach((startPiece , i)  => {
        const square = document.createElement('div');  
        square.classList.add('square');
        square.setAttribute('id' , i)
        square.classList.add('beige');
        gameBoard.append(square);
            if (x%2===0) {
                square.classList.add(beige)
            }
        
    })
}

creatBoard();
