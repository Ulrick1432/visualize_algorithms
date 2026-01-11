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

let countLoops = 0;
const visualizeDivide = (array, container) => {
  // Create ONE node
  const node = mergeSort.addDivElement(container, ["merge-node"]);

  // Render current array
  const valuesRow = mergeSort.addDivElement(node, ["merge-node-values"]);
  array.forEach(v => mergeSort.addMergeElement(valuesRow, v));

  if (array.length <= 1) return;

  // Split
  const { left, right } = mergeSort.divide(array);

  // Children container
  const childrenRow = mergeSort.addDivElement(node, ["merge-node-children"]);

  // Recurse into child nodes
  visualizeDivide(left, childrenRow);
  visualizeDivide(right, childrenRow);
};






document.getElementById("start-sorting").addEventListener("click", startMergeSort);
