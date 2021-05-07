const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const getRandomIndexArr = (arr) => Math.floor(Math.random() * arr.length);

const isEven = (number) => number % 2 === 0;

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};

export {
  getRandomNumber, isEven, findGcd, getRandomIndexArr,
};
