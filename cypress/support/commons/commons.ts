export const getRandomElement = (list: any[]): any => {
  return list[Math.floor(Math.random() * list.length)];
};

export const getRandomElements = (list: any[], amount = 1): any => {
  return Array(amount)
    .fill(0)
    .map(() => list.splice(Math.floor(Math.random() * list.length), 1)[0]);
};

export const getRandomWithIndex = (list: any[]): any => {
  const index = Math.floor(Math.random() * list.length);
  const element = list[index];

  return { element, index };
};
