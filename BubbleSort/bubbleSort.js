const arrOne = [9, 8, 7, 6, 5, 4, 3, 2, 1]; // = O(n^2) runtime
const arrTwo = [5, 6, 1, 3];

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

function addElement(content) {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(content);
  newDiv.appendChild(newContent);

  const parentContainer = document.querySelector(".container-bubble-sort");
  newDiv.classList.add("bubble", `bubble-value-${content}`);

  parentContainer.appendChild(newDiv);
}


const addArray = (arr) => {
    // Display initial array
    arr.forEach((element) => addElement(element));
}

addArray(arrTwo)

// Delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Sorts an array using the bubble sort algorithm with DOM animation.
 * @param {number[]} arr - The array to sort.
 */

const bubbleSort = async (arr) => {
  let notComplete = true;
  let swapCount = 0;

  await delay(100); // Allow time for initial rendering

  while (notComplete) {
    notComplete = false; // Assume the array is sorted initially

    for (let i = 0; i < arr.length - 1; i++) {
      const bubbles = document.querySelectorAll(".bubble");
      const bubble1 = bubbles[i];
      const bubble2 = bubbles[i + 1];

      // Highlight the bubbles being compared
      bubble1.style.backgroundColor = "red";
      bubble2.style.backgroundColor = "red";

      // Add a short delay to ensure the colors change immediately
      await delay(1000);

      console.log(`${i}. Comparing ${arr[i]} and ${arr[i + 1]} swapCount → ${swapCount} index → ${i}`);

      if (arr[i] > arr[i + 1]) {
        // Swap in the array
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // Change colors to indicate a swap is happening
        bubble1.style.backgroundColor = "green";
        bubble2.style.backgroundColor = "green";

        // Animate swapping in the DOM
        bubble1.style.transform = `scale(1.2) translate(40px, -20px)`; // Move right + bounce up
        bubble2.style.transform = `scale(1.2) translate(-40px, 20px)`; // Move left + bounce down

        await delay(2000); // Wait for animation to complete

        // Settle the bubbles back into position
        bubble1.style.transform = `translate(260px, 0px)`;
        bubble2.style.transform = `translate(-260px, 0px)`;

        await delay(2000); // Wait for animation to complete

        // Reset transform styles
        bubble1.style.removeProperty('transform');
        bubble2.style.removeProperty('transform');

        // Removes old nodes
        bubbles.forEach(node => {
          const parentContainer = document.querySelector(".container-bubble-sort");
          parentContainer.removeChild(node);

        });
        
        // Insert new nodes (updated order)
        arr.forEach(value => {
          addElement(value);
        })

        swapCount++;

        // Indicate that sorting is not complete
        notComplete = true;
      }

      // Reset colors after comparison
      bubble1.style.backgroundColor = "lightblue";
      bubble2.style.backgroundColor = "lightblue";

      // Add a short delay to ensure the reset is visible
      await delay(300);
    }
  }

  console.log(`Sorting completed with ${swapCount} swaps.`);
  return arr;
};





//const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // = O(n) runtime
bubbleSort(arrTwo);
//bubbleSort(arrTwo);