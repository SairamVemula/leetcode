class RecentCounter {
    queue: number[] = []
    constructor() {
        
    }

    ping(t: number): number {
        this.queue.push(t);
        while (this.queue[0] < t - 3000) {
            this.queue.splice(0, 1);
        }
        return this.queue.length;
    }
}

const r = new RecentCounter();
[[642],[1849],[4921],[5936],[5957]].forEach(n => r.ping(n.pop()!))