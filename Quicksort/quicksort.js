import { elements } from "./quickSortElements.js"; 

let countQuickSortCalls = 0;

/**
 * Performs the QuickSort algorithm on the given array.
 * 
 * This function sorts an array in place using the QuickSort algorithm.
 * It selects a random pivot, swaps it with the last element, and then
 * partitions the array around the pivot. The function is called recursively
 * to sort the subarrays before and after the pivot.
 * 
 * @param {Array} arr - The array to be sorted.
 * @param {number} low - The starting index of the array segment to be sorted.
 * @param {number} high - The ending index of the array segment to be sorted.
 */
const quickSort = async (arr, low, high) => {
  countQuickSortCalls++;
  console.log(`${countQuickSortCalls}.Running quickSort`)
  if (low < high) {
    // Find random Pivot
    let pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    let pivotValue = arr[pivotIndex];
    // Add elements 
    if (countQuickSortCalls === 1) { // add ElementTree for original array
      console.log(`pivot for the origin arr is = ${arr[pivotIndex]}`);
      elements.addElementTree(arr);
      const pivotElement = document.querySelector(`.element-value-${pivotValue}`);
      pivotElement.textContent = `${pivotElement.textContent} Pivot`
      await elements.delay(2000);
    } else {
      console.log(`Sub array found at call count ${countQuickSortCalls}`);
      console.log(`arr = ${arr} low = ${low} high = ${high}`);
      elements.addElementTree(arr.slice(low, high));
    }
    // Swap pivot with the last index if it's not already the last one
    if (pivotIndex !== arr.length - 1) {
      console.log(`Swapping pivot with the last index of the array`);
      arr = swapArr(arr, pivotIndex, high);
      await swapVisually(pivotIndex, high);
      // update arr visually
      let nodeArr = document.querySelectorAll('.element');
      elements.removeNodes(nodeArr);
      elements.insertNodes(arr, pivotValue);
    } else {
      console.log(`pivot is already at the last index of the array`);
    }

    pivotIndex = partition(arr, low, high);

    console.log(`Ending quickSortCall ${countQuickSortCalls}`);
    // Recursive calls
    await quickSort(arr, low, pivotIndex - 1);
    await quickSort(arr, pivotIndex + 1, high);
  }
};

// Swap places with two elements (element Two will first go the the temp)
const swapVisually = async (elementOneIndex, elementTwoIndex) => {
  const arrElements = document.querySelectorAll('.element');
  
  // Defined temp element
  const tempElement = document.querySelector('.temp');
  const tempElementRect = tempElement.getBoundingClientRect();

  // Defined last index element
  const elementTwo = arrElements[elementTwoIndex];
  const elementTwoRect = elementTwo.getBoundingClientRect();

  // Defined pivot element
  const elementOne = arrElements[elementOneIndex];
  const elementOneRect = elementOne.getBoundingClientRect();

  // Switch places
  elementTwo.style.transform = `translate(${tempElementRect.x - elementTwoRect.x}px, ${tempElementRect.y - elementTwoRect.y}px)`;
  await elements.delay(1500);
  elementOne.style.transform = `translate(${elementTwoRect.x - elementOneRect.x}px, ${elementTwoRect.y - elementOneRect.y}px)`;
  await elements.delay(1500);
  elementTwo.style.transform = `translate(${elementOneRect.x - elementTwoRect.x}px, ${elementOneRect.y - elementTwoRect.y}px)`;
  await elements.delay(1500);
}

/**
 * Partitions the array around a pivot element, rearranging elements such that
 * elements less than the pivot are on the left, and elements greater than the pivot
 * are on the right. The pivot is chosen as the last element of the array.
 *
 * @param {Array} arr - The array to be partitioned.
 * @param {number} low - The starting index of the array segment to be partitioned.
 * @param {number} high - The ending index of the array segment to be partitioned.
 * @returns {number} The index of the pivot element after partitioning.
 */
const partition = async (arr, low, high) => {
  if (high < arr.length - 1) {
    console.log(`This is the low sub array = ${arr.slice(low, high)}`);
  } else {
    console.log(`This is the high sub array = ${arr.slice(low, high)}`);
  };

  let pivot = arr[high];
  let smallerElementIndex = low - 1;

  // While currentIndex is less or equal to high AKA last index in the array "Sliced arr"
  for (let currentIndex = low; currentIndex <= high - 1; currentIndex++) {
    if (arr[currentIndex] < pivot) {
      console.log(`${arr[currentIndex]} is less than Pivot ${pivot} and will swap places`);
      smallerElementIndex++;
      arr = swapArr(arr, currentIndex, smallerElementIndex);

      // Changes the visual
      await swapVisually(currentIndex, smallerElementIndex);
      elements.removeNodes(document.querySelectorAll('.element'));
      elements.insertNodes(arr, pivot);
    }
  }

  arr = swapArr(arr, high, smallerElementIndex + 1);
  await swapVisually(high, smallerElementIndex + 1);
  elements.removeNodes(document.querySelectorAll('.element'));
  elements.insertNodes(arr, pivot);
  console.log(`This is the array in the end of the partition function = ${arr}`);
  return smallerElementIndex + 1;
}

/**
 * Swaps the elements at indices i and j in the given array.
 *
 * @param {Array} arr - The array containing elements to be swapped.
 * @param {number} i - The index of the first element to swap.
 * @param {number} j - The index of the second element to swap.
 * @returns {Array} - The array after the elements have been swapped.
 */
const swapArr = (arr, i, j) => {
  console.log(`Swapping values = ${arr[i]} with ${arr[j]}`);
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  console.log(`After swap function the array is now = ${arr}`);
  return arr;
};

const generateArray = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(i);
  }
  return shuffleArray(arr);
};

// Function to shuffle the array
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const startQuickSort = async () => {
  // input is used to defined the index quantity
  const input = document.getElementById("arraySize");
  const inputValue = input.value;
  if (isNaN(inputValue)) {
    alert("Please enter a valid number.");
    return;
  }
  const size = parseInt(inputValue);
  let arr = await generateArray(size);
  console.log(`array size = ${size} And the array is = ${arr}`);

  if (size >= 2 && size <= 10) {
    // quicksort
    await quickSort(arr, 0, arr.length - 1);
  } else {
    alert("Please enter a number between 2 and 10.");
  }
  //console.log(`DONE! and the arr is now = ${arr}`);
};


document.getElementById("start-sorting").addEventListener("click", startQuickSort);

// For test ↓ 
// let arr = [4, 2, 1, 3, 0, 6, 7];
// quickSort(arr, 0, arr.length - 1);
// console.log("Sorted array:", arr);