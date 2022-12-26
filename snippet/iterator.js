class SymbolCollections {
    constructor() {}

    [Symbol.iterator]() {
        let count = -1;
        return {
            next() {
                ++count;
                if (count < 3) {
                    return { value: count, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        }
    }
}

class GeneratorCollections {
    constructor() {}

    *[Symbol.iterator]() {
        yield 0;
        yield 1;
        yield 2;
    }
}

module.exports = {
    SymbolCollections,
};