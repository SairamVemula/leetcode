function maxScore(nums1: number[], nums2: number[], k: number): number {
    type IndexNum = [number, number];
    class MinHeap {
        private heap: number[] = [];
        constructor(heap: number[] = []) {
            for (let i = 0; i < heap.length; i++) {
                this.insert(heap[i])
            }
        }
        insert(val: number) {
            this.heap.push(val);
            this.upheap(this.heap.length - 1)
        }
        upheap(i: number) {
            if (i <= 0) return;
            const pi = this.parent(i);
            if (this.heap[pi] && this.heap[pi] > this.heap[i]) {
                this.swap(i, pi);
                this.upheap(pi)
            }
        }
        downheap(i: number) {

            const li = this.left(i)
            const ri = this.right(i)

            let min = i;

            if (li < this.heap.length && this.heap[li] < this.heap[min]) min = li;
            if (ri < this.heap.length && this.heap[ri] < this.heap[min]) min = ri;

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
        get length(){
            return this.heap.length
        }
        get peek(){
            return this.heap[0]
        }
    }

    const minHeap = new MinHeap();
    const nums = nums2.map((n, i) => [n, nums1[i]]).sort((a, b) => b[0] - a[0]);

    let result = Number.MIN_SAFE_INTEGER, sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const [num1, num2] = nums[i];
        sum += num2;
        minHeap.insert(num2);
        if(minHeap.length === k){
            result = Math.max(result, sum * num1);
            const min = minHeap.pop();
            sum -= min;
        }
    }

    return result;
};

let nums1 = [1, 3, 3, 2], nums2 = [2, 1, 3, 4], k = 3;
// let nums1 = [2, 1, 14, 12], nums2 = [11, 7, 13, 6], k = 3;
// let nums1 = [22, 5, 25, 15, 28, 1], nums2 = [22, 30, 25, 25, 9, 18], k = 3;

console.log(maxScore(nums1, nums2, k))