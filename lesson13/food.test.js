const foodFunction = require('./food');

describe ("test food function", () => {
    const food = [
        { kind: 'potato', price: 10 },
        { kind: 'bred', price: 16 },
        { kind: 'pepper', price: 27 },
        { kind: 'banana', price: 32 },
        { kind: 'lemon', price: 50 }
        ];
    const min = 12;
    const max = 40;
    
    test('check food array', () => {
        expect(foodFunction(food, min, max).length).toBe(3);
        expect(foodFunction(food, min, max)).toEqual(expect.arrayContaining([expect.objectContaining({ kind: 'pepper', price: 27 })]));
        expect(foodFunction(food, min, max)).toEqual(expect.arrayContaining([expect.objectContaining(food[1])]));
        expect(foodFunction(food, min, max)).toEqual(expect.arrayContaining([expect.objectContaining(food[2])]));
        expect(foodFunction(food, min, max)).toEqual(expect.arrayContaining([expect.objectContaining(food[3])]));
        expect(foodFunction(food, min, max)[0]['price']).toBeGreaterThan(min);
        expect(foodFunction(food, min, max)[2]['price']).toBeLessThan(max);
        expect(foodFunction(food, min, max)).toEqual(expect.not.arrayContaining([expect.objectContaining({ kind: 'lemon', price: 50 })]));
        
        expect(foodFunction(food, min, max)[0]).toMatchObject({ kind: 'bred', price: 16 })
        expect(Array.isArray(foodFunction(food, min, max))).toBeTruthy()
    });
})
