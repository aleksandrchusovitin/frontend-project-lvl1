const getRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const isEven = (number) => number % 2 === 0;

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};

export { getRandomNumber, isEven, findGcd };
