// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let ar1 = [1, 2, 4, 5, 6, 6, 8, 8, 9, 5, 2, 3, 51];
let objCheck = {
  name: 'ravi',
  midName: 'chandra',
  lastName: 'reddy',
  sureName: 'yadiki',
  price: 9,
};
let ar2 = [...new Set(ar1)];

function dest(a, b, c, d, ...args) {
  console.log(a, b, c, d, args);
}

dest(...ar2);

if ({}) {
  console.log('name' in objCheck);
}

let str = '';

let checkNullsh = str || 'default';
let trueNullsh = str ?? 'default';
console.log(checkNullsh);
console.log(trueNullsh);

let ar = Array(100)
  .fill(0)
  .map((_, i) => i + 1);

let setVlue = new Set(ar);

// console.log(ar);
// console.log(setVlue);
// console.log([...Array(100).keys()]);

console.log(ar1.entries(), 'vale');
let test = [objCheck];
for (let [i, val] of test.entries()) {
  console.log(i, (val.name = 'prathap'));
}
console.log(Object.entries(objCheck));

function search(ary, targetValue, start = 0, end = ary.length - 1) {
  console.log(ary, 'test');
  if (start > end) {
    return `not fount details`;
  }
  let midValue = Math.floor((start + end) / 2);
  console.log(midValue, 'mid value');
  if (ary[midValue] === targetValue) {
    return midValue;
  }
  if (ary[midValue] > targetValue) {
    return search(ary, targetValue, start, midValue - 1);
  }
  if (ary[midValue] < targetValue) {
    return search(ary, targetValue, midValue + 1, end);
  }
}

console.log(search([...new Set(ar1)], 9), 'ary search');
