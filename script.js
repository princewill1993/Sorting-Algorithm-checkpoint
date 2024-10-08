function insertionSort(arr) {
  // Iterate through each element starting from the second one
  for (let i = 1; i < arr.length; i++) {
    // Store the current element as key
    let key = arr[i];

    // Start comparing with the previous element
    let j = i - 1;

    // Shift elements of the sorted section that are greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the key in its correct position
    arr[j + 1] = key;
  }

  // Return the sorted array
  return arr;
}

// Example 
const array = [8, 1, 4, 9, 6, 3, 5, 2, 7, 0];
console.log("Sorted array:", insertionSort(array));
// Out put:

//Sorted array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];