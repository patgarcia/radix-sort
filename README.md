# radix-sort
First implementation of radix sort--from conceptual description.


```javascript
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

let unsortedArray = [
  21, 18,  8,  3,  2,  2, 24, 22, 38, 20,
  38, 19,  3, 31, 34, 12, 27,  7, 22, 11,
  29, 19, 16,  2,  4, 23, 12, 19, 24, 22,
  25, 30, 30, 29, 33, 31,  3,  2, 33, 33
];

radixSort(unsortedArray); 
/* 
[
  2,  2,  2,  2,  3,  3,  3,  4,  7,  8,
 11, 12, 12, 16, 18, 19, 19, 19, 20, 21,
 22, 22, 22, 23, 24, 24, 25, 27, 29, 29,
 30, 30, 31, 31, 33, 33, 33, 34, 38, 38
] 
*/

```

