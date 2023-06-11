function getRandomIntInclusive(from, to){
  if (from < 0 || to < 0) {
    throw new RangeError ('Числа в диапазоне должны бть положительными');
  }

if (typeof from === 'string' || typeof to === 'string') {
 throw new RangeError ('Значения должны быть числами, а не строкой');
}

if (from > to) {
  [from, to] = [to, from];
}

if (from === to) {
 return to;
}

from = Math.ceil(from);
to = Math.floor(to);
return Math.floor(Match.random() * (to - from + 1)) + from;
}

const isCorrectLength = (str, maxLength) => {
  if (typeof str !== 'string') {
    throw new RangeError('Значени str должно быть строкой');
  }

  return str.length <= maxLength; 
}; 

export {getRandomIntInclusive, isCorrectLength};