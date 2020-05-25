const Gameboard = (() => {
    const gameBoard = ['X','O','O','X','X','O','X','O','X'];
    return {gameBoard};
})();

const displayController = (() =>{
    const render = (board) => {
        for (let i = 0; i < board.length; i++){
           let squareID = document.getElementById(`${i+1}`);
           squareID.innerText = board[i];
        }
    }
    return {render};
})();

const playerFactory = (name, symbol) =>{   
    return {name,symbol}
}

displayController.render(Gameboard.gameBoard);

function addMark(){

}