function maxScore(nums1: number[], nums2: number[], k: number): number {
    type IndexNum = [number, number];
    class MaxHeap {
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
            if (this.heap[pi] && this.heap[pi][0] < this.heap[i][0]) {
                this.swap(i, pi);
                this.upheap(pi)
            }
        }
        downheap(i: number) {

            const li = this.left(i)
            const ri = this.right(i)

            let max = i;

            if (li < this.heap.length && this.heap[li][0] > this.heap[max][0]) max = li;
            if (ri < this.heap.length && this.heap[ri][0] > this.heap[max][0]) max = ri;

            if (max === i) return;

            this.swap(max, i);
            this.downheap(max)

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
    }
    const h2 = new MaxHeap(nums2);
    let minProduct : IndexNum = [0,0];
    let sum = 0

    for (let i = 0; i < k; i++) {
        minProduct = h2.pop();
    }
    sum += nums1.splice(minProduct[1],1)[0];
    const h1 = new MaxHeap(nums1);
    
    for (let i = 0; i < k - 1; i++) {
        sum += h1.pop()[0];
    }
    return sum * minProduct[0]
};

// let nums1 = [1, 3, 3, 2], nums2 = [2, 1, 3, 4], k = 3;
let nums1 = [2,1,14,12], nums2 = [11,7,13,6], k = 3;

console.log(maxScore(nums1, nums2, k))