// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}
console.log(` `);
console.log(`<--- Iteration #1: Find the maximum --->`);
console.log(`The max of this two numbers is ${maxOfTwoNumbers(2, 8)}`);

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

// function find the longest word in a array of words

function findLongestWord(arr) {
  if (!arr.length) return null;
  else return arr.reduce((a, b) => (a.length < b.length ? b : a), "");
}
console.log(` `);
console.log(`<--- Iteration #2: Find longest word --->`);
console.log(`The longest word is ${findLongestWord(words)}`);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(` `);
console.log(`<--- Iteration #3: Calculate the sum --->`);
console.log(`The total sum of the numbers is ${sumNumbers(numbers)}`);

// Iteration #3.2 Bonus:
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(arr) {
  // my version -- correct result but not passing two tests

  // if (!arr.length) return 0;
  // let totalSum = 0;
  // for (let element of arr) {
  //   if (typeof element === "string") totalSum += element.length;
  //   if (typeof element === "number") totalSum += element;
  //   if (typeof element === "boolean" && true) totalSum += 1;
  //   if (typeof element === "object" || typeof element === "array")
  //     throw new Error("Unsupported data type sir or ma'am");
  // }
  // return totalSum;

  // Bogdan version -- does pass all the tests!
  return arr.reduce((totalSum, currentValue) => {
    if (typeof currentValue === "object" || typeof currentValue === "array")
      throw new Error("Unsupported data type sir or ma'am");
    if (typeof currentValue === "boolean") {
      return currentValue === true ? totalSum + 1 : totalSum + 0;
    } else if (typeof currentValue === "string") {
      return totalSum + currentValue.length;
    }
    return totalSum + currentValue;
  }, 0);
}

console.log(` `);
console.log(
  `<--- Iteration #3.2 --- Bonus: Calculate the sum of a mixed data types array--->`
);
console.log(`The total sum of the mixed data types array is ${sum(mixedArr)}`);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (!arr.length) return null;
  else return arr.reduce((a, b) => a + b, 0) / arr.length;
}

console.log(` `);
console.log(
  `<--- Iteration #4 --- Level 1 ----: Calculate the average of an array of numbers --->`
);
console.log(
  `The average of the array of numbers is ${averageNumbers(numbersAvg)}`
);

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(arr) {
  if (!arr.length) return null;
  else return arr.join("").length / arr.length;
}

console.log(` `);
console.log(
  `<--- Iteration #4 --- Level 2 ----: Calculate the average of an array of strings --->`
);
console.log(
  `The average word lenght of the array of strings is ${averageWordLength(
    wordsArr
  )}`
);

// Bonus - Iteration #4.1

function avg(arr) {
  if (!arr.length) return null;
  else {
    let totalSum = 0;
    for (let element of arr) {
      if (typeof element === "string") totalSum += element.length;
      if (typeof element === "number") totalSum += element;
      if (typeof element === "boolean" && true) totalSum += 1;
    }
    return totalSum / arr.length;
  }
}

console.log(` `);
console.log(
  `<--- Iteration #4.1 --- Bonus ----: Calculate the average of an array of mixed data types --->`
);
console.log(`The average of the array of mixed data types is ${avg(mixedArr)}`);

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(arr) {
  if (!arr.length) return null;

  let uniqueArr = [];
  for (let word of arr) {
    if (!uniqueArr.includes(word)) uniqueArr.push(word);
  }
  return uniqueArr;
}

console.log(` `);
console.log(
  `<--- Iteration #5 ----: Find the duplicates values in an array, removes then and return a new array  --->`
);
console.log(
  `The new array without duplicates is -->`,
  uniquifyArray(wordsUnique)
);

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, word) {
  if (arr.length === 0) return null;
  return arr.includes(word);
}

console.log(` `);
console.log(
  `<--- Iteration #6 ----: Find if an element exists in the array --->`
);
console.log(`The word is ${doesWordExist(wordsFind, "matter")}`);

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(arr, word) {
  let count = 0;
  for (let el of arr) {
    if (el === word) count++;
  }
  return count;
}

console.log(` `);
console.log(
  `<--- Iteration #7 ----: Find how many times an element exists in the array --->`
);
console.log(`The word appears ${howManyTimes(wordsCount, "matter")} times`);

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];
// borrowed solution --- passes tests
function greatestProduct(arr) {
  let finalProduct = 0;

  const rowsCount = arr.length;
  const columnsCount = arr[0].length;

  // console.log(rowsCount);
  // console.log(columnsCount)

  for (let i = 0; i < rowsCount; i++) {
    let row = arr[i];
    for (let j = 0; j < columnsCount - 3; j++) {
      // 0 - 1 - 2 - 3
      // 1 - 2 - 3 - 4
      let rowProduct = row[j] * row[j + 1] * row[j + 2] * row[j + 3];
      if (rowProduct > finalProduct) {
        finalProduct = rowProduct;
      }
    }
  }

  for (let i = 0; i < columnsCount; i++) {
    for (let e = 0; e < rowsCount - 3; e++) {
      let columnProduct =
        arr[e][i] * arr[e + 1][i] * arr[e + 2][i] * arr[e + 3][i];
      if (columnProduct > finalProduct) {
        finalProduct = columnProduct;
      }
    }
  }

  return finalProduct;
}

console.log(` `);
console.log(
  `<--- Iteration #8.1 --- Bonus ----: Find the greatest Product in a grid 20x20 --->`
);
console.log(
  `The greatest product of this 20x20 grid is ${greatestProduct(matrix)}`
);
console.log(` `);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
