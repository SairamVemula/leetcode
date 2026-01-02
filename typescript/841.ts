function canVisitAllRooms(rooms: number[][]): boolean {
    const keys = new Set();
    function visit(key: number) {
        keys.add(key);
        for (const _key of rooms[key]) {
            if(!keys.has(_key)) visit(_key);
        }
    }
    visit(0);
    return keys.size === rooms.length
};