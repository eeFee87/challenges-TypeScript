function expressionsMatter(a: number, b: number, c: number): number {
  return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
}

console.log(expressionsMatter(1, 2, 3));
