// задача №1
const fill = (arraySize, value) => {
  return Array(arraySize).fill(value);
}

const data1 = 3;
const valueToFill = 'a';
console.log(fill(data1, valueToFill))

// задача №2
const reverse = (array) => {
return array.reverse();
 }

const data2 = [1, 2, 3];
console.log(reverse(data2)); // [3, 2, 1]

// задача №3
const compact = (array) => {
  return array.filter(value => {
    return value !== false && value !== undefined && value !== '' && value !== 0 && value !== null;
  });
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
