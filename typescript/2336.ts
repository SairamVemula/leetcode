class SmallestInfiniteSet {
    heap: number[] = [];
    constructor(){
        for (let i = 1; i <= 2000; i++) {
            this.addBack(i + 1)
        }
    }
    upheap(i: number) {
        if (i <= 0) return;
        const pi = Math.floor((i - 1) / 2)
        if (this.heap[pi] > this.heap[i]) {
            [this.heap[pi], this.heap[i]] = [this.heap[i], this.heap[pi]];
            this.upheap(pi);
        }
    }
    downheap(i: number) {
        const left = i * 2 + 1;
        const right = i * 2 + 2;
        let min = i;
        if (left < this.heap.length && this.heap[left] < this.heap[min]) min = left;
        if (right < this.heap.length && this.heap[right] < this.heap[min]) min = right;
        if (min === i) return
        [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
        this.downheap(min);
    }
    popSmallest(): number {
        if (!this.heap.length) throw new Error('no elements in this.heap');
        if (this.heap.length === 1) {
            return this.heap.pop()!
        }
        const first = this.heap[0];
        const last = this.heap.pop()!;
        this.heap[0] = last;
        this.downheap(0);
        return first;
    }

    addBack(num: number): void {
        this.heap.push(num);
        this.upheap(this.heap.length - 1);
    }
}

// ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
// [[], [2], [], [], [], [1], [], [], []]

function run(){
    const obj = new SmallestInfiniteSet()
    obj.addBack(2)
    // obj.popSmallest()

}

run();