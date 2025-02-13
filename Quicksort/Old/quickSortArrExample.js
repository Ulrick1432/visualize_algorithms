// Partition function

const partition = (arr, low, high) => {
  console.log(`Running partition function!!!`);
  console.log(`arr = ${arr} low = ${low} high = ${high}`);
  console.log(`pivot = ${arr[high]} `);
  
  // Choose the pivot
  let pivot = arr[high];

  // Index of smaller element and indicates
  // the right position of pivot found so far
  console.log(`i AKA j = low - 1`)
  let i = low - 1;

  // Traverse arr[low..high] and move all smaller
  // elements to the left side. Elements from low to
  // i are smaller after every iteration
  console.log(`Array before loop = ${arr}`);
  for (let j = low; j <= high - 1; j++) {
    console.log(`loop i = ${i} and j = ${j}`)
    if (arr[j] < pivot) {
      i++;
      console.log(`loop before swap i = ${i} and j = ${j}`)
      swap(arr, i, j);

    }
  }

console.log(`Array after loop = ${arr}`);

  // Move pivot after smaller elements and
  // return its position
  swap(arr, i + 1, high);
  console.log(`Array after loop now with pivot after smaller elements = ${arr}`);

  return i + 1;

}

// Swap function
const swap = (arr, i, j) => {
  console.log(`Swap ${arr[i]} with ${arr[j]}`);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// The QuickSort function implementation
const quickSort = (arr, low, high) => {
  console.log(`Running quickSort function!!!`);
  console.log(`arr = ${arr} low = ${low} high = ${high}`);

  if (low < high) {
    console.log(`low is lower than high`);
    // pi is the partition return index of pivot
    let pi = partition(arr, low, high);

    // Recursion calls for smaller elements
    // and greater or equals elements
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// Main driver code
let arr = [ 10, 7, 8, 9, 1, 5 ];
let n = arr.length;

// Call QuickSort on the entire array
quickSort(arr, 0, n - 1);
for (let i = 0; i < arr.length; i++) {

    console.log(arr[i] + " ");

}