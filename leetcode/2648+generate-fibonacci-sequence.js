/**
 * @return {Generator<number>}
 */
let fibGenerator = function*() {
    let f0 = 0;
    let f1 = 1;
    let result = 1;
    let counter = 0;

    yield f0;
    yield f1;

    while (true) {
        let tmp = result;
        result += counter;
        yield result;
        counter = tmp;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

let max = 6;
let counter = 0;
const gen = fibGenerator();
for (let i of gen) {
    console.log(i);
    if (counter > max) {
        break;
    }
    ++counter;
}