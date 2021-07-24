function placeValDigit(num, placeVal) {
  // Extracts digit in place value
  return Math.floor((num % (placeVal * 10)) / placeVal);
}

function radixSort(array) {
  let placeVal = 1;
  // Array of buckets for each digit 0-9
  const buckets = Array(10)
    .fill()
    .map((_) => []);
  //Bucketing logic
  while (true) {
    for (let num of array) {
      const bucket = placeValDigit(num, placeVal);
      buckets[bucket].push(num);
    }
    // flatten bucketing result
    array = buckets.reduce((acc, b) => acc.concat(b));
    // TODO: Change condition to check when placeVal
    // covered all nums in the array to avoid last loop
    if (buckets[0].length === array.length) return array;
    // reset buckets
    buckets.forEach((_, i, arr) => (arr[i] = []));
    // move to next place value
    placeVal *= 10;
  }
}

const unsortedArr = new Array(100)
      .fill()
      .map(() => Math.floor(Math.random() * 50000));

const sortedArr = radixSort(unsortedArr);



// Test
const jsSortedArr = unsortedArr.sort((a,b) => a-b)

jsSortedArr.every((num, i) => num === sortedArr[i])
// true
