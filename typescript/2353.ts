class FoodRatings {
    private highestRatedCuisines = new Map<string, string[]>;
    private foodRatings = new Map<string, number>;
    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        for (const [i, food] of foods.entries()) {
            this.foodRatings.set(food, ratings[i]);
            this.highestRatedCuisines.set(cuisines[i], [...(this.highestRatedCuisines.get(cuisines[i]) ?? []), food]);
        }
    }
    sort(cuisine: string) {
        const foods = this.highestRatedCuisines.get(cuisine)!;
        foods.sort((a, b) => {
            const _a = this.foodRatings.get(a)!;
            const _b = this.foodRatings.get(b)!;
            if (_a !== _b) {
                return _b - _a;
            } else {
                return b.localeCompare(a);
            }
        })
        this.highestRatedCuisines.set(cuisine, foods);
    }

    changeRating(food: string, newRating: number): void {
        this.foodRatings.set(food, newRating);
    }

    highestRated(cuisine: string): string {
        this.sort(cuisine)
        return this.highestRatedCuisines.get(cuisine)![0]!;
    }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */