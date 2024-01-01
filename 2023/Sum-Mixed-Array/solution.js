"use strict";
function sumMix(x) {
    return x.reduce((acc, item) => typeof item === 'string' ? Number(item) + acc : item + acc, 0);
}
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
