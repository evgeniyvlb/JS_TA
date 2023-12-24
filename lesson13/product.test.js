const product = require('./product');

describe ("addition of the number", () => {

    test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(product(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });
})

describe ("test given userList array", () => {
    const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2' ];
    test('Test userList array', () => {
    expect(userList).toContain('admin');
    expect(userList[0]).toContain('Nick');
    expect(userList.slice(-1)[0]).toBe('new_user_2');
    expect(userList.length).toBe(5);
    expect(typeof userList[3]).toBe("string");
    expect(userList[8]).toBeUndefined();
    });
})