function linearSearch(array, target) {
  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // if element at current index is equal to target
    if (array[i] === target) return i;
  }

  // if target is not found in array
  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 5;

console.log(linearSearch(array, target)); // 4
