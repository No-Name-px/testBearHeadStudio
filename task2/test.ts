import all from "./solution";

const pr1 = new Promise((res, rej) => setTimeout(() => res(1), 100));
const pr2 = new Promise((res, rej) => setTimeout(() => res(2), 200));
const pr3 = new Promise((res, rej) => setTimeout(() => res(3), 500));

const pr4rejected = new Promise((res, rej) =>
    setTimeout(() => rej("reject"), 300)
);

all([pr1, pr2, pr3])
    .then((data) => console.log(data))
    .catch((err) => console.error(err)); //вывод: [1, 2, 3]

all([pr1, pr2, pr3, pr4rejected])
    .then((data) => console.log(data))
    .catch((err) => console.log(err)); // вывод: reject
