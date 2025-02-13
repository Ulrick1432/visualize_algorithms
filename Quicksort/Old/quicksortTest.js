// Function to add elements to the DOM
const addElementTree = async (arr) => {
// <div class="quick-sort-tree">
//  <div class="node-container">
//    <div class="element element-value-3">3</div>
//    <div class="element element-value-1">1</div>
//    <div class="element element-value-4">4</div>
//    <div class="element element-value-0">0</div>
//    <div class="element element-value-2">2</div>
//  </div>
//  <div class="temp" style="width: 231.797px; height: 38px;">Temp</div>
// </div>
  const sortTreeContainer = document.querySelector(".quick-sort-tree");

  const nodeContainer = document.createElement("div");
  nodeContainer.classList.add("node-container");
  sortTreeContainer.appendChild(nodeContainer);

  // Creates elements
  arr.forEach(value => {
    const element = document.createElement("div");
    element.classList.add("element", `element-value-${value}`);
    element.textContent = value;
    nodeContainer.appendChild(element);
  });

  // Get size of one of the elements
  const node = document.querySelector('.element-value-0');
  if (node) {
    const nodeRect = node.getBoundingClientRect();
    const nodeWidth = nodeRect.width;
    const nodeHeight = nodeRect.height;

    // create temp node and sets it size the same as the other elements
    const tempNode = document.createElement("div");
    sortTreeContainer.appendChild(tempNode);
    tempNode.classList.add('temp');
    tempNode.innerText = 'Temp';
    tempNode.style.width = `${nodeWidth}px`;
    tempNode.style.height = `${nodeHeight}px`;
  } else {
    console.error("Element with class 'element-value-0' not found.");
  }
};

// Delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
  return arr;
};

/**
 * Swaps the positions of two DOM elements using CSS transforms.
 *
 * @param {HTMLElement} iElement - The first element to swap.
 * @param {HTMLElement} jElement - The second element to swap.
 */
const swapElements = async (arr, iElement, jElement, pivotIndex) => {
  const domElements = document.querySelectorAll(".element");
  let pivotElement = domElements[pivotIndex];
  pivotElement.style.backgroundColor = "red";
  console.log(`swap element value ${iElement.textContent} and value ${jElement.textContent}`);
  iElement.textContent += " i";
  jElement.textContent += " j";
  const iElementRect = iElement.getBoundingClientRect();
  const jElementRect = jElement.getBoundingClientRect();

  const deltaX = jElementRect.x - iElementRect.x;
  const deltaY = jElementRect.y - iElementRect.y;

  iElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  await delay(2000);
  jElement.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;
  await delay(2000);

  console.log(`arr before swap = ${arr}`);

  // Swap in the arr
  arr = await swap(arr, arr[arr.length - 1], pivotIndex);
  console.log(`arr after swap = ${arr}`);

  // Removed old nodes
  const elementTreeContainer = document.querySelector(".quick-sort-tree");
  const elementTreeContainerChilds = Array.from(elementTreeContainer.childNodes);
  elementTreeContainerChilds.forEach(node => {
    elementTreeContainer.removeChild(node);
  });

  // Insert new nodes 
  addElementTree(arr)
  pivotElement.style.backgroundColor = "red";


  // Reset the transform after the transition
  iElement.style.transform = '';
  jElement.style.transform = '';
  return arr;
};

const partition = async (arr) => {
 // Her skal den splitte højre og venstre efter første quicksort
};

const quicksort = async (arr) => {
  // Select a random number from the arr to be the pivot
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const pivotIndex = arr.findIndex(element => element === pivot);
  console.log(`pivot = ${pivot} and the pivotIndex is = ${pivotIndex}`);

  // Get elements from the dom
  const domElements = document.querySelectorAll(".element");
  console.log(domElements);
  // Get pivot element and make it red
  const pivotElement = domElements[pivotIndex];
  pivotElement.style.backgroundColor = "red";
  
  // pivot switch places with the last index if it's not already there
  if (arr[arr.length - 1] !== pivot) {
    console.log(`want to swap value ${domElements[arr.length - 1].innerText} with value ${pivot}`);
    arr = await swapElements(arr, domElements[arr.length - 1], pivotElement, pivotIndex);
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
    // Add new elements to the DOM
    addElementTree(arr);
    console.log("origin array have now been generated and added visually");

    // quicksort
    arr = await quicksort(arr);
  } else {
    alert("Please enter a number between 2 and 10.");
  }
  console.log(`DONE! and the arr is now = ${arr}`);
};

document.getElementById("start-sorting").addEventListener("click", startQuickSort);