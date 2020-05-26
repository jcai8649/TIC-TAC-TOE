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
                checkWin(player1.symbol);
                player1.theirTurn = false;
                player2.theirTurn = true;
            } else if (player2.theirTurn){
                turn.innerText = "Player X's turn"
                Gameboard.gameBoard[id-1] = player2.symbol;
                render(Gameboard.gameBoard);
                checkWin(player2.symbol);
                player1.theirTurn = true;
                player2.theirTurn = false;
            }
        }
    }

    const checkWin = (symbol) => {
        debugger;
        let win = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
        let newArr = [];
        for (let i = 0; i < Gameboard.gameBoard.length; i++){
            if (symbol === Gameboard.gameBoard[i]) {
                newArr.push(i+1);
            }
        }
    
        let checker = (arr, target) => target.every(v => arr.includes(v));

        for (let i = 0; i < win.length; i++){
            if (checker(newArr, win[i])){
                turn.innerText = `${symbol} wins!` ;
                break;
            }
            else if (!Gameboard.gameBoard.includes("") && i === win.length - 1){
                turn.innerText = "It's a tie!"
                break;
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
    return {name, symbol, theirTurn}
}

function createPlayer(playerName){
    const player1 = PlayerFactory(playerName, 'X', true);
    const player2 = PlayerFactory(playerName, 'O', false);   
}

function restart(){

}

function start(){

}

function validation(){

}