function toCsvText(array: number[][]): string {
  return array.map((row) => row.join(',')).join('\n'); // good luck
}

const input = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]
];

console.log(toCsvText(input));
