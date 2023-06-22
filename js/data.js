import {getRandomIntInclusive} from './util.js';

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

const getRandomLikes = () => getRandomIntInclusive(15,200);
getRandomLikes();

const getRandomElement = (arr) => arr [getRandomIntInclusive(0, arr.length -1)];

const getId =(() => {
  let id = 1;
  return () => id++;
})();

function getCommentId() {
  let id = getRandomIntInclusive(1,1000);
  while (COMMENT_IDS.includes(id)) {
    id = getRandomIntInclusive(1, 1000);
  }
  return id;
}

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

function generateDescription() {
  const comments = Array.from({length: getRandomIntInclusive(0,3)}, generateComment);
  const id = getId();
  return {
    id: id,
    likes: getRandomLikes(),
    comments: comments
  };
}

export {generateDescription, PHOTOS_COUNT};
DESCRIPTION();
getCommentId();
