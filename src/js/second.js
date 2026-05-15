

const randomDelay = (value) => {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);

    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises = [
  randomDelay("A"),
  randomDelay("B"),
  randomDelay("C"),
  randomDelay("D"),
  randomDelay("E"),
];

Promise.race(promises).then((result) => {
  console.log("Fastest:", result);
});
