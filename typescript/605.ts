function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let i = 0;
    while (i < flowerbed.length) {
        if(!n) break;
        if (!flowerbed[i] && !flowerbed[i + 1]) {
            flowerbed[i] = 1;
            n--
        };
        i += flowerbed[i] ? 2 : 1;
    }
    return !n;
};


console.log(canPlaceFlowers([1,0,0,0,0,1],2))