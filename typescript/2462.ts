function totalCost(costs: number[], k: number, candidates: number): number {
    type IndexNum = [number, number];
    class MinHeap {
        private heap: IndexNum[] = [];
        constructor(heap: number[] = []) {
            for (let i = 0; i < heap.length; i++) {
                this.insert([heap[i], i])
            }
        }
        insert(val: IndexNum) {
            this.heap.push(val);
            this.upheap(this.heap.length - 1)
        }
        upheap(i: number) {
            if (i <= 0) return;
            const pi = this.parent(i);
            if (this.heap[pi] && this.heap[pi][0] > this.heap[i][0]) {
                this.swap(i, pi);
                this.upheap(pi)
            }
            if (this.heap[pi] && this.heap[pi][0] === this.heap[i][0] && this.heap[pi][1] > this.heap[i][1]) {
                this.swap(i, pi);
                this.upheap(pi)
            }
        }
        downheap(i: number) {

            const li = this.left(i)
            const ri = this.right(i)

            let min = i;

            if (li < this.heap.length && this.heap[li][0] < this.heap[min][0]) min = li;
            if (li < this.heap.length && this.heap[li][0] === this.heap[min][0] && this.heap[li][1] < this.heap[min][1]) min = li;
            if (ri < this.heap.length && this.heap[ri][0] < this.heap[min][0]) min = ri;
            if (ri < this.heap.length && this.heap[ri][0] === this.heap[min][0] && this.heap[ri][1] < this.heap[min][1]) min = ri;

            if (min === i) return;

            this.swap(min, i);
            this.downheap(min)

        }
        swap(i: number, j: number) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
        }
        left(i: number) {
            return i * 2 + 1;
        }
        right(i: number) {
            return i * 2 + 2;

        }
        parent(i: number) {
            return Math.floor((i - 1) / 2)
        }
        pop() {
            if (!this.heap.length) throw new Error('no elements in heap');
            if (this.heap.length === 1) {
                return this.heap.pop()!
            }
            const first = this.heap[0];
            const last = this.heap.pop()!;
            this.heap[0] = last;
            this.downheap(0);
            return first;
        }
        get length() {
            return this.heap.length
        }
        get peek() {
            return this.heap[0]
        }
    }


    const minHeap = new MinHeap();
    let nextHead: number = candidates;
    let nextTail: number = costs.length - candidates - 1;

    for (let i = 0; i < candidates; i++) {
        const last = costs.length - 1 - i;
        if (i <= last)
            minHeap.insert([costs[i], i])
        if (last > i)
            minHeap.insert([costs[last], last])
    }
    let cost = 0, count = 0;
    while (count < k) {

        const [min, index] = minHeap.pop();
        cost += min;
        // costs.splice(index, 1);
        count++
        if (nextHead > nextTail) continue;
        minHeap.insert(index < nextHead ?
            [costs[nextHead], nextHead++] :
            [costs[nextTail], nextTail--]
        );
    }
    return cost
};


// console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4))
// console.log(totalCost([1, 2, 4, 1], 3, 3))
// console.log(totalCost([31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58], 11, 2))
console.log(totalCost([2, 2, 2, 2, 2, 2, 1, 4, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 7, 3))