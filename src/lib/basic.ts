export function _range(end: number, start: number = 0, step: number = 1) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

export function _random(max: number, min: number = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
