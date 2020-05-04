// 1. In HTML, create 9 divs that each share a class and that each have a unique id.
// 2. In JS, create a variable called "marker" with the initial value of 'X'.
// 3. Cache each div in a separate variable.
// 4. Using those variables, add click event listeners to each.
// 5. Above the event listeners, create a function called renderMarker that takes in a cell that will be passed from the event listener.
// 6. Inside each event listener, call renderMarker and pass the current cell to it.
// 7. Inside renderMarker, if the marker is 'X', set the cell content to 'O' and reassign marker to 'O'. Do the opposite if the marker is 'O'.
// 8. Inside each event listener, only call renderMarker if that cell's content is empty.
// 9. Above renderMarker, create a function called checkWin.
// 10. Call checkWin from inside renderMarker after the text has been set and the marker been reassigned.
// 11. Inside checkWin, create a condition for each win condition. Since there are 9 win conditions and two letters, there will need to be 18 win conditions. Inside these conditions, create an alert that indicates who has won.
// 12. At the top, create a variable called tieCounter and initialize it to 0.
// 13. Inside renderMarker, increment tieCounter by 1.
// 14. Create an additional condition inside checkWin that checks to see if tieCounter is equal to 9. If it is, declare the game a tie.
// 15. In HTML, create a Play Again button with an id.
// 16. In JS, select the Play Again button and give it an event listener.
// 17. Above checkWin, create a function called reset. Inside it, reset the global variables and reset all the cells' text to empty.
// 18. Inside the Play Again button event listener, call the reset function.
// 19. To prevent the players from continuing to put markers on the board, call reset after each alert in checkWin.

/*----- constants -----*/
const colorLookup = {
    '1': 'X',
    '-1': 'O',
    'null': null,
};

/*----- app's state (variables) -----*/
let board;      // array of column array with 1, -1 or null
let turn;        // 1 or -1
let winner;      // 1 = player1; -1 = player2; 't' = tie; null = no winner

/*----- cached element references -----*/
const cellEls = Array.from(document.querySelectorAll('#board > div'));


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleClick); //handle click is a function that will be called later
document.getElementById('btn').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
};

function render() {
    renderBoard();
}

function renderBoard() {
    board.forEach(function(cell, cellIdx) {
        cellEls[cellIdx].innerHTML = colorLookup[cell];
        // const img = document.createElement("img");
        // img.src = "js/images/X.png"
        // // cellEls[cellIdx].style.backgroundColor = colorLookup[cell];
        // if (cell === 1) {
        //     cellEls[cellIdx].appendChild(img);
        // } else if (cell === -1) {
        //     cellEls[cellIdx].appendChild(img);
        // };
    });
};

function handleClick(evt) {
    const target =  evt.target;
    const cellIdx = cellEls.indexOf(evt.target);
    const cell = board[cellIdx]
    console.log(target);
    if (cell !== null) {return};
    board[cellIdx] = turn;
    turn *= -1;

    // const img = document.createElement("img");
    // img.src = "js/images/X.png"
    // target.appendChild(img);

    render();
};