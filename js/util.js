export const isCorrectLength = (str, maxLength) => str.length <= maxLength;

export function getRandomIntInclusive(from, to) {
  if (from < 0 || to < 0) {
    throw new RangeError('Числа в диапазоне должны быть положительными');
  }

  if (from === to) {
    return from;
  }
  if (from > to) {
    [from, to] = [to, from];
  }

  return Math.round(Math.random() * (to - from) + from);
}
