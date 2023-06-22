const PHOTOS_COUNT = 25;
const NAMES = [
  'Кристина',
  'Оксана',
  'Ксюша',
  'Марьяна',
  'Татьяна'
];
const DESCRIPTION = Array.from({length: PHOTOS_COUNT}, (_, i) => `Описание ${i}`);
DESCRIPTION();
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENT_IDS = [];
function isCorrectLength(str, maxLength) {
  return str.length <= maxLength;
}
isCorrectLength();
const getRandomLikes = () => getRandomIntInclusive(15,200);
getRandomLikes();
const getRandomElement = (arr) => arr [getRandomIntInclusive(0, arr.length -1)];
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
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
const getId =(() => {
  let id = 1;
  return () => id++;
})();
getId();
function getCommentId() {
  let id = getRandomIntInclusive(1,1000);
  while (COMMENT_IDS.includes(id)) {
    id = getRandomIntInclusive(1, 1000);
  }
  return id;
}
getCommentId();
function generateComment() {
  const messageTexts = [];
  for (let i = 0; i < getRandomIntInclusive(1,2); i++) {
    messageTexts.push(getRandomElement(MESSAGES));
  }
  return {
    id: `img/avatar-${getRandomIntInclusive(1,6)}.svg`,
    message: messageTexts.join(''),
    name: getRandomElement(NAMES)
  };
}
generateComment();
