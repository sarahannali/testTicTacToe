window.top.postMessage(
    JSON.stringify({
        source: "mockfrontend",
        error: false,
        message: "Hello World"
    }),
    '*'
);

// const squares = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

// Game.setupHooks = () => {
//     const onClick = (e) => {
//         Game.onMove(e.target.id);
//         if (Game.gameOver()) Game.onEnd();
//         else {
//             Game.SetCurrentPlayer(Game.getNextPlayer());
//             Game.getValueByID("subtitle").innerHTML = `Current Player: ${Game.currentPlayer.userName}`
//         }
//     }

//     squares.forEach((square) => {
//         Game.getValueByID(`square${square}`).onclick = onClick;
//     });
// }

// Game.onStart = () => {
//     const PlayerOne = new Player("PlayerOne", { "playerToken": "X" })
//     const PlayerTwo = new Player("PlayerTwo", { "playerToken": "O" })

//     Game.AddPlayers([PlayerOne, PlayerTwo]);
//     Game.SetCurrentPlayer(PlayerOne);

//     Game.getValueByID("subtitle").innerHTML = `Current Player: ${Game.currentPlayer.userName}`;
// }

// Game.onMove = (clickedElementID) => {
//     Game.getValueByID(clickedElementID).innerHTML = Game.currentPlayer.properties["playerToken"];
// }

// Game.onEnd = () => {
//     Game.getValueByID("subtitle").innerHTML = `Winning Player: ${Game.currentPlayer.userName}`;
// }

// Game.getValues = () => {
//     const values = [];

//     squares.forEach((square) => values.push(Game.getValueByID(`square${square}`).innerHTML));

//     return values;
// }

// Game.gameOver = () => {
//     const values = Game.getValues();

//     if (
//         (values[0] != '' && values[0] == values[1] && values[1] == values[2]) ||
//         (values[0] != '' && values[0] == values[3] && values[3] == values[6]) ||
//         (values[0] != '' && values[0] == values[4] && values[4] == values[8]) ||
//         (values[1] != '' && values[1] == values[4] && values[4] == values[7]) ||
//         (values[2] != '' && values[2] == values[4] && values[4] == values[6]) ||
//         (values[2] != '' && values[2] == values[5] && values[5] == values[8]) ||
//         (values[3] != '' && values[3] == values[4] && values[4] == values[5]) ||
//         (values[6] != '' && values[6] == values[7] && values[7] == values[8])
//     ) {
//         return true;
//     }

//     return false;
// }
