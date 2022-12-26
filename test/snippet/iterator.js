"use strict";

const { SymbolCollections, GeneratorCollections } = require('../../snippet/iterator');

describe("Iterator", function() {

	it("SymbolCollections", function() {
        const result = [];
        const collections = new SymbolCollections();
        for (let item of collections) {
            result.push(item);
        }

        expect(result).toEqual([0, 1, 2]);
    });

    it("SymbolCollections", function() {
        const result = [];
        const collections = new SymbolCollections();
        for (let item of collections) {
            result.push(item);
        }

        expect(result).toEqual([0, 1, 2]);
    });

});
