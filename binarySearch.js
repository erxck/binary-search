function binarySearch(array, target) {
  // index of first element
  let startIndex = 0;
  // index of last element
  let endIndex = array.length - 1;

  // while startIndex is less than or equal to endIndex
  while (startIndex <= endIndex) {
    // middle index is the sum of startIndex and endIndex divided by 2
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    // middle element is the element located at middleIndex
    let middleElement = array[middleIndex];

    // if target is equal to middleElement
    if (target === middleElement) {
      return middleIndex;
    }

    // if target is greater than middleElement
    if (target > middleElement) {
      /* then startIndex is equal to middleIndex + 1 so that the search
      continues on the left side of the list */
      startIndex = middleIndex + 1;
    } else {
      /* else endIndex is equal to middleIndex - 1 so that the search 
      continues on the right side of the list */
      endIndex = middleIndex - 1;
    }
  }

  // if target is not found in the list
  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 5;

console.log(binarySearch(array, target)); // 4
