function findKthLargest(nums: number[], k: number): number {
    const heap: number[] = [];
    function upheap(i: number) {
        if (i <= 0) return;
        const pi = Math.floor((i - 1) / 2)
        if (heap[pi] < heap[i]) {
            [heap[pi], heap[i]] = [heap[i], heap[pi]];
            upheap(pi);
        }
    }

    function downheap(i: number) {
        const left = i * 2 + 1;
        const right = i * 2 + 2;
        let max = i;
        if (left < heap.length && heap[left] > heap[max]) max = left;
        if (right < heap.length && heap[right] > heap[max]) max = right;
        if (max === i) return
        [heap[i], heap[max]] = [heap[max], heap[i]];
        downheap(max);
    }

    function pop() {
        if (!heap.length) throw new Error('no elements in heap');
        if (heap.length === 1) {
            return heap.pop()!
        }
        const first = heap[0];
        const last = heap.pop()!;
        heap[0] = last;
        downheap(0);
        return first;
    }
    for (const n of nums) {
        heap.push(n);
        upheap(heap.length - 1);
    }
    let kMax = -1
    for (let i = 0; i < k; i++) {
        kMax = pop();
    }
    return kMax
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))