export function getArraySequence(length: number): number[] {
  return Array.apply(null, { length }).map(Number.call, Number);
}

export function arrayChangeElementPosition<T>(immutableArray: T[], oldIndex: number, newIndex: number): T[] {
  const array = immutableArray.slice();
  if (newIndex >= array.length) {
    let temp = newIndex - array.length + 1;
    while (temp--) {
      array.push(undefined);
    }
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
export function getRandomNumberBetweenRange(min: number, max: number): number {
  const ceilMin = Math.ceil(min);
  const ceilMax = Math.floor(max);
  return Math.floor(Math.random() * (ceilMax - ceilMin + 1)) + ceilMin;
}
