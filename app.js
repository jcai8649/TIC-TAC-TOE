
const Gameboard = (() => {
    const gameBoard = ['', '', '', '', '', '', '', '', ''];
    return {gameBoard};
})();

const displayController = (() =>{
    
    const addMark = (id) =>{
        let turn = document.querySelector(".turn");
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
                let turn = document.querySelector(".turn");
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



function restart(){

}

function start(){
    if (validation()){
        let player1 = document.getElementById("player1").value
        let player2 = document.getElementById("player2").value
        GameStart.createPlayer(player1);
        GameStart.createPlayer(player2);
        clear();
        createBoard();
    }
}


function clear(){
    const main = document.querySelector("main");
    main.textContent = "";
}

function validation(){
    let player1 = document.getElementById("player1").value
    let player2 = document.getElementById("player2").value
    if (player1 === "" || player2 === ""){
        alert("Please enter a name of each player");
        return false;
    }
    return true;
}


function createBoard(){
    const main = document.querySelector("main");
    const numberOfSquare = 9;
    let grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    main.append(grid);

    let body = document.querySelector("body");
    let turn = document.createElement("h6");
    turn.setAttribute("class","turn");
    turn.innerText = "Player X's Turn"
    body.insertBefore(turn, body.childNodes[2]);

    for(let i = 1; i <= numberOfSquare; i++){
        let square = document.createElement("div")
        square.setAttribute("class", "square");
        square.setAttribute("id", i);
        square.setAttribute("onclick", `displayController.addMark(${i})`)
        grid.append(square);
    }
}

const GameStart = (() =>{

    let playerCount = 0;

    const createPlayer = (playerName) =>{
        if (playerCount === 0){
            playerCount++;
            return player1 = PlayerFactory(playerName, 'X', true);
        } else {
            playerCount++;
            return player2 = PlayerFactory(playerName, 'O', false); 
        } 
    }

    return {createPlayer}
})();

