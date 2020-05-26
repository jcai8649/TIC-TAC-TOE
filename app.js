let turn = document.querySelector(".turn");

const Gameboard = (() => {
    const gameBoard = ['', '', '', '', '', '', '', '', ''];
    return {gameBoard};
})();

const displayController = (() =>{
    const addMark = (id) =>{
        if(Gameboard.gameBoard[id-1] === ""){
            if(player1.theirTurn){
                turn.innerText = "Player O's turn"
                Gameboard.gameBoard[id-1] = player1.symbol;
                render(Gameboard.gameBoard);
                player1.theirTurn = false;
                player2.theirTurn = true;
            } else if (player2.theirTurn){
 
                turn.innerText = "Player X's turn"
                Gameboard.gameBoard[id-1] = player2.symbol;
                render(Gameboard.gameBoard);
                player1.theirTurn = true;
                player2.theirTurn = false;
            }
        }
    }

    const render = (board) => {
        for (let i = 0; i < board.length; i++){
           let squareID = document.getElementById(`${i+1}`);
           squareID.innerText = board[i];
        }
    }

    return {addMark, render};
})();

const PlayerFactory = (name, symbol, theirTurn) =>{  
    return {name,symbol, theirTurn}
}

const player1 = PlayerFactory("player1", 'X', true);
const player2 = PlayerFactory("player2", 'O', false);



