// src/index.test.ts
import { melnorisCalculate } from './index';

describe('melnorisCalculate', () => {
    it('should add two numbers correctly', () => {
        expect(melnorisCalculate(2, 3)).toBe(5);
    });
});
