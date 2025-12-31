function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [asteroids[0]];
    for (let i = 1; i < asteroids.length; i++) {
        const a1 = asteroids[i]
        if (a1 > 0) stack.push(a1)
        else {
            while (stack.length && stack.at(-1)! > 0 && stack.at(-1)! < Math.abs(a1)) stack.pop();
            if(stack.at(-1)! === Math.abs(a1)) stack.pop()
            else if(!stack.length || stack.at(-1)! < 0) stack.push(a1)
        }
    }
    return stack
};

console.log(asteroidCollision([5, 10, -5]))
console.log(asteroidCollision([8, -8]))
console.log(asteroidCollision([10, 2, -5]))
console.log(asteroidCollision([3, 2, -5]))
console.log(asteroidCollision([-2, -1, 1, 2]))
console.log(asteroidCollision([-2, -2, 1, -2]))