const arrOne = [9, 8, 7, 6, 5, 4, 3, 2, 1]; // = O(n^2) runtime

/**
 * Sorts an array using the bubble sort algorithm.
 *
 * This function iteratively compares adjacent elements in the input array
 * and swaps them if they are in the wrong order. The process is repeated
 * until the array is sorted. The function also logs the number of swaps
 * performed during the sorting process.
 *
 * @param {Array<number>} input - The array of numbers to be sorted.
 * @returns {Array<number>} The sorted array.
 */

//Original const bubbleSort = input => {
//   let swapCount = 0
//   let swapping = true;
  
//   while (swapping) {
//     swapping = false;
//     for (let i = 0; i < input.length - 1; i++) {
//       if (input[i] > input[i + 1]) {
//         swap(input, i, i + 1);
//         swapCount++;
//         swapping = true;
//       }
//     }
//   }
//   console.log(`Swapped ${swapCount} times`);
//   return input;
// };

function addElement(content) {
  // create a new div element
  const newDiv = document.createElement("div");

  // Add content to the div
  const newContent = document.createTextNode(content);
  newDiv.appendChild(newContent);

  // Add classes to the div
  newDiv.classList.add("bubble", `bubble-${content}`);
  console.log(`This is the element ${content}'s id ${newDiv.className}`);

  // Find the container element
  const parrentContainer = document.querySelector(".container-bubble-sort");
  
  // Append the new div to the container
  parrentContainer.appendChild(newDiv);

}

const addArray = (arr) => {
    // Display initial array
    arr.forEach((element) => addElement(element));
}

addArray(arrOne)


const bubbleSort = (input) => {
  let swapCount = 0
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};

/**
 * Swaps the elements at the specified indices in an array.
 *
 * @param {Array} arr - The array containing elements to be swapped.
 * @param {number} indexOne - The index of the first element to swap.
 * @param {number} indexTwo - The index of the second element to swap.
 */

const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

//const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // = O(n) runtime
bubbleSort(arrOne);
//bubbleSort(arrTwo);