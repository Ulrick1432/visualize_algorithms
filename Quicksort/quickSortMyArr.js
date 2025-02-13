let arr = [4, 2, 1, 3, 0, 6, 7];

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
const quickSort = (arr, low, high) => {
  if (low < high) {
    // Find random Pivot
    let pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    arr = swapWithLastIndex(arr, pivotIndex, high);
    
    pivotIndex = partition(arr, low, high);

    // Recursive calls.
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

/**
 * Swaps the element at the specified pivot index with the last element in the array.
 *
 * @param {Array} arr - The array in which the swap operation is performed.
 * @param {number} pivotIndex - The index of the pivot element to be swapped with the last element.
 * @param {number} lastIndex - The index of the last element in the array.
 * @returns {Array} The modified array after the swap operation.
 */
const swapWithLastIndex = (arr, pivotIndex, lastIndex) => {
  const temp = arr[lastIndex];
  arr[lastIndex] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  return arr;
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
const partition = (arr, low, high) => {
  let pivot = arr[high];
  let smallerElementIndex = low - 1;

  for (let currentIndex = low; currentIndex <= high - 1; currentIndex++) {
    if (arr[currentIndex] < pivot) {
      smallerElementIndex++;
      arr = swapArr(arr, currentIndex, smallerElementIndex);
    }
  }

  arr = swapArr(arr, high, smallerElementIndex + 1);
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
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  return arr;
};

quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);