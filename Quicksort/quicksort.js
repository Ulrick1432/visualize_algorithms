//Docs https://www.geeksforgeeks.org/quick-sort-algorithm/?ref=shm

// Function to add elements to the DOM
const addElement = (value) => {
  const container = document.querySelector(".quick-sort");
  const element = document.createElement("div");
  element.classList.add("element", `element-value-${value}`);
  element.textContent = value;
  container.appendChild(element);
};

  // Delay function
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
}

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (leftBound < rightBound) {
    const pivotIndex = partition(array, leftBound, rightBound);
    quicksort(array, leftBound, pivotIndex - 1);
    quicksort(array, pivotIndex, rightBound);
  }
  return array;
}

const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
}

module.exports = {
  quicksort,
  partition
};
