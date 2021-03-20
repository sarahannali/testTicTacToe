export class Player {
    userName;
    properties;

    constructor(givenName, givenProperties) {
        this.userName = givenName;
        this.properties = givenProperties
    }
}

class GameBoard {
    currentPlayer = null;
    players = [];
    currentElementID = null;

    setupHooks() {}
    onStart() {}
    onMove() {}
    onEnd() {}
    gameOver() {}

    SetCurrentPlayer(player) {
        this.currentPlayer = player;
    }
    GetCurrentPlayer() {
        return this.currentPlayer;
    }
    AddPlayers(playersArray) {
        playersArray.forEach(player => {
            this.players.push(player);
        });
    }
    getValueByID = ( ID ) => {
        return document.getElementById(ID);
    }
    getNextPlayer = () => {
        let nextIdx = this.players.findIndex((player) => player == this.currentPlayer);
        nextIdx++;
        if (nextIdx >= this.players.length) {
            return this.players[0];
        }
        else return this.players[nextIdx];
    }
}

export const Game = new GameBoard();

window.onload = () => {
    Game.setupHooks();
    Game.onStart();
}
