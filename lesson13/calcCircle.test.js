const circle = require('./calcCircle');

describe ("check circle functions", () => {

    test('check getCircleLength', () => {
        expect(circle.getCircleLength(22).toFixed(1)).toBe('138.2');
    });

    test('check getCircleArea', () => {
        expect(circle.getCircleArea(9)).toBeCloseTo(254.47, 2);
    });
})

describe ("check circle functions with no arguments passed", () => {

    test('check getCircleLength', () => {
        expect(circle.getCircleLength()).toBeNaN();
    });

    test('check getCircleArea', () => {
        expect(circle.getCircleArea()).toBeNaN();
    });
})