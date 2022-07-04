"use strict";

const { curry } = require('../snippet/curry');


describe('Curry', () => {
    const date = new Date();

    const log = (date, importance, message) => {
        return (`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
    };

    it('curry - 3 args', () => {
        const logNow = curry(log);
        expect(logNow(date, 'urgent', 'big error')).toBe(`[${date.getHours()}:${date.getMinutes()}] [urgent] big error`);
    });

    it('curry - 2 args', () => {
        const logNow = curry(log)(date);
        expect(logNow('urgent', 'big error')).toBe(`[${date.getHours()}:${date.getMinutes()}] [urgent] big error`);
    });

    it('curry - 1 args', () => {
        const logUrgentNow = curry(log)(date)('urgent');
        expect(logUrgentNow('big error')).toBe(`[${date.getHours()}:${date.getMinutes()}] [urgent] big error`);
    });
});