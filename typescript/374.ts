/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
const pick = 6

function guess(num: number) {
    return num === 6 ? 0 : num > pick ? -1 : 1;
}
function guessNumber(n: number): number {
    let min = 1, max = Number.MAX_SAFE_INTEGER;
    while (true) {
        const p = guess(n);
        switch (p) {
            case -1:
                max = Math.min(n - 1, max);
                break;
            case 1:
                min = Math.max(n + 1, min);
                break;
            case 0:
                return n;
        }
        n = Math.floor((max + min) / 2)
    }
};

console.log(guessNumber(10))