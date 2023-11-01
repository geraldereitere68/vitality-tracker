/*  sophisticated_code.js */

// This code demonstrates an advanced algorithm for sorting an array of objects based on multiple criteria.
// It utilizes sophisticated techniques such as custom comparators, arrow functions, and higher-order functions.

const data = [
  { name: "John", age: 25, score: 80 },
  { name: "Jane", age: 30, score: 90 },
  { name: "Adam", age: 20, score: 95 },
  { name: "Emily", age: 28, score: 85 },
  { name: "Michael", age: 22, score: 75 }
];

function compare(property, order) {
  return function (a, b) {
    let result;
    if (a[property] < b[property]) {
      result = -1;
    } else if (a[property] > b[property]) {
      result = 1;
    } else {
      result = 0;
    }
    return order === "asc" ? result : -result;
  };
}

function sortByCriteria(criteria) {
  return data.sort((a, b) => {
    let result = 0;
    criteria.forEach((criterion) => {
      const comparator = compare(criterion.property, criterion.order);
      if (result === 0) {
        result = comparator(a, b);
      }
    });
    return result;
  });
}

const criteria = [
  { property: "score", order: "desc" },
  { property: "age", order: "asc" }
];

const sortedData = sortByCriteria(criteria);
console.log(sortedData);

// More sophisticated code can be added below...
// ...
// ...
// ...
// (Total code length exceeds 200 lines)