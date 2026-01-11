// Start mergesort
import { helperFuncs } from "../helperFuncs.js";
import { mergeSort } from "./mergeSort.js";

const startMergeSort = async () => {
  console.log("Start Merge Sort");
  const input = document.getElementById("arraySize");
  const size = parseInt(input.value); 
  if (size >= 2 && size <= 10) {
    const arr = helperFuncs.shuffleArray(helperFuncs.generateArray(size));
    // Clear existing elements
    const containerSplit = document.querySelector(".merge-sort-split");
    containerSplit.innerHTML = '';
    const containerMerge = document.querySelector(".merge-sort-merge");
    containerMerge.innerHTML = '';

    const mainparent = mergeSort.addDivElement(containerSplit, ["merge-sort-split-mainparent"]);
    // Add new elements to the DOM
    arr.forEach(value => mergeSort.addMergeElement(mainparent, value)); 

    const mainSubparent = mergeSort.addDivElement(containerSplit, ["merge-sort-split-mainSubparent"]);

    // Start the merge sort visualization
    visualizeDivide(arr, mainSubparent);



  } else {
    return alert("Please enter a number between 2 and 10.");
  }
};

const visualizeDivide = (array, container) => {
  if (array.length <= 1) return;

  const { left, right } = mergeSort.divide(array);

  const branchContainer = mergeSort.addDivElement(container, [
    "element-merge-subparent"
  ]);

  mergeSort.createBranch({ left, right }, branchContainer);

  visualizeDivide(left, branchContainer);
  visualizeDivide(right, branchContainer);
};


document.getElementById("start-sorting").addEventListener("click", startMergeSort);
