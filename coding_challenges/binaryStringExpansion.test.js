const binStr = require('./binaryStringExpansion');


test('if should return an array of the correct length', ()=>{
    expect(binStr('1?0').length).toBe(2);
    expect(binStr('.1000').length).toBe(1);
})