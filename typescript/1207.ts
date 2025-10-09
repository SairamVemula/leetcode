function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i];
        map.set(v, (map.get(v) ?? 0) + 1)
    }
    return new Set(map.values()).size === map.size
};