function predictPartyVictory(senate: string): string {
    const queue: string[] = senate.split('');
    let i = 0;
    while (true) {
        if (queue[i]) {
            let index = -1;
            let j = (i + 1) % queue.length;
            while (j !== i) {
                // console.log({ j, i, queue })
                if (queue[j] === (queue[i] === 'R' ? 'D' : 'R')) {
                    index = j;
                    break;
                }
                j = (j + 1) % queue.length
            }
            // console.log({ index, i, queue })
            if (index === -1) return queue.filter(Boolean)[0] === 'R' ? 'Radiant' : 'Dire';
            queue.splice(index, 1, '');
        }
        // if (index > i)
        i = (i + 1) % queue.length
    }
};

// console.log(predictPartyVictory('RD'))
// console.log(predictPartyVictory('RDD'))
// console.log(predictPartyVictory('DDRRR'))
// console.log(predictPartyVictory("RRDDD"))
console.log(predictPartyVictory("DRRDRDRDRDDRDRDR"))