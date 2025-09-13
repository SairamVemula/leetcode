
function stoneGameIII(stoneValue: number[]) {
    const game = new Game(stoneValue, 'Alice', 'Bob');
    game.numberOfChoses = 3;
    game.play();
    return game.winner();
};

class Game {
    #players: string[] = [];
    #score: number = 0;
    #stoneValues: number[] = [];
    numberOfChoses = 1;
    constructor(values: number[], player1: string, player2: string) {
        this.#stoneValues = values;
        this.#players.push(player1, player2)
    }
    get stoneValues() {
        return this.#stoneValues;
    }
    play() {
        const remainingStoneValues = this.#stoneValues.slice();
        let playing = 0;
        while (remainingStoneValues.length) {
            const player = this.#players[playing];
            const choices = remainingStoneValues.slice(0, this.numberOfChoses);
            // console.log({ remainingStoneValues });
            const deleteCount = this.chose(choices, Boolean(playing % 2));
            remainingStoneValues.splice(0, deleteCount);
            playing = (playing + 1) % this.#players.length;
        }
    }
    chose(stoneValues: number[], min: boolean) {
        let score = this.#score;
        const choices: number[] = [];
            stoneValues.forEach(n => (min ? score -= n : score += n, choices.push(score)));
            const newScorce = Math[min ? 'min': 'max'](...choices);
            this.#score = newScorce;
            const index = choices.findIndex(v => v === newScorce) + 1;
            return index;
    }
    winner() {
        return this.#score === 0 ? 'Tie' : this.#score < 0 ? this.#players[1] : this.#players[0]
    }
}
console.log(stoneGameIII([1,2,3,7]))
console.log(stoneGameIII([1,2,3,-9]))
console.log(stoneGameIII([1,2,3,6]))
console.log(stoneGameIII([-1,-2,-3]))