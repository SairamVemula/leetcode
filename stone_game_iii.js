/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
    const game = new Game(stoneValue);
    game.numberOfChoses = 3;
    game.addPlayer(new Player('Alice'));
    game.addPlayer(new Player('Bob'));
    game.play();
    return game.winner();
};

class Game {
    /**@type {Player[]} */
    #players = [];
    /**@type {number[]} */
    #stoneValues = [];
    /**@type {number} */
    numberOfChoses = 1;

    /**
 * @param {number[]} values
 */
    constructor(values) {
        this.#stoneValues = values;
        
    }

    /**
 * @param {Player} player
 * @return {void}
 */
    addPlayer(player) {
        this.#players.push(player);
    }
    /** @returns {number[]} */
    get stoneValues() {
        return this.#stoneValues;
    }
    /**
     * @return {void}
     */
    play() {
        let stoneValues = this.#stoneValues.slice();
        let playing = 0;
        while (stoneValues.length) {
            const choices = stoneValues.splice(0, this.numberOfChoses);
            stoneValues = this.#players[playing].chose(choices).concat(stoneValues);
            playing = (playing + 1) % this.#players.length;
        }
    }
    /**
     * @return {string}
     */
    winner() {
        const sortPlayers = [...this.#players].sort((a, b) => b.score - a.score);
        const winnerPlayers = sortPlayers.filter(p => p.score == sortPlayers[0].score);
        return winnerPlayers.length > 1 ? 'Tie' : winnerPlayers[0].name;
    }
}

class Player {
    #name;
    #score = 0;
    constructor(name) {
        this.#name = name;
    }
    get name() { return this.#name }
    get score() { return this.#score }

    /**
 * @param {number[]} stoneValues
 * @return {number[]}
 */
    chose(stoneValues) {
        const values = stoneValues.map((_, i) => stoneValues.slice(0, i + 1).reduce((p, c) => p + c) + this.#score);
        const index = values.findIndex((s) => (s === Math.max(...values)));
        const slice = stoneValues.splice(index + 1)
        stoneValues.forEach(v => this.#score += v);
        return slice;
    }
}

// console.log(stoneGameIII([1, 2, 3, 7]));
// console.log(stoneGameIII([1, 2, 3, -9]));
// console.log(stoneGameIII([1, 2, 3, 6]));
console.log(stoneGameIII([[1, 2, 3, -1, -2, -3, 7]]));