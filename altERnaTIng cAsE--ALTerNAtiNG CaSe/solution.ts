function toAlternatingCase(s: string): string {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      result += s[i].toLowerCase();
    } else {
      result += s[i].toUpperCase();
    }
  }
  return result;
}

console.log(toAlternatingCase('HeLLo WoRLD'));
