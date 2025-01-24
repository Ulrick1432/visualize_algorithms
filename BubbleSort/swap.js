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

export default swap;
