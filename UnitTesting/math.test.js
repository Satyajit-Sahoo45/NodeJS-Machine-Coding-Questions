const { expect } = require('chai');
const { add, multiply } = require('../math');

describe('Math functions', () => {
    it('should add two numbers correctly', () => {
        expect(add(1, 2)).to.equal(3);
    });

    it('should multiply two numbers correctly', () => {
        expect(multiply(2, 3)).to.equal(6);
    });
});
