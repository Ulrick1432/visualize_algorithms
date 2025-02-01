// Test arrays
const arrOne = [9, 8, 7, 6, 5, 4, 3, 2, 1]; // = O(n^2) runtime
const arrTwo = [5, 6, 1, 3];

// Function to generate an array based on user input
document.addEventListener("DOMContentLoaded", () => {
  // Function to generate an array based on user input
  const generateArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(i);
    }
    return shuffleArray(arr);
  };

  // Function to shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Function to start the bubble sort process
  const startBubbleSort = async () => {
    const input = document.getElementById("arraySize");
    const size = parseInt(input.value);

    if (size >= 2 && size <= 10) {
      const arr = generateArray(size);

      // Clear existing bubbles
      const container = document.querySelector(".bubble-sort");
      container.innerHTML = '';

      // Add new bubbles to the DOM
      arr.forEach(value => addBubbleElement(value));

      // Start the bubble sort
      await bubbleSort(arr);
    } else {
      alert("Please enter a number between 2 and 10.");
    }
  };

  document.getElementById("start-sorting").addEventListener("click", startBubbleSort);

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


  // Function to add elements to the DOM
  const addBubbleElement = (value) => {
    const container = document.querySelector(".bubble-sort");
    const bubble = document.createElement("div");
    bubble.classList.add("bubble", `bubble-value-${value}`);
    bubble.textContent = value;
    container.appendChild(bubble);
  };

  // Delay function
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  /**
   * Sorts an array using the bubble sort algorithm with DOM animation.
   * @param {number[]} arr - The array to sort.
   */

  const bubbleSort = async (arr) => {
    let notComplete = true;
    let swapCount = 0;
    
    const statusHeader = document.querySelector('.status');

    await delay(100); // Allow time for initial rendering

    while (notComplete) {
      notComplete = false; // Assume the array is sorted initially

      for (let i = 0; i < arr.length - 1; i++) {
        statusHeader.innerHTML = 'Status';

        const bubbles = document.querySelectorAll(".bubble");
        const bubble1 = bubbles[i];
        const bubble2 = bubbles[i + 1];

        // Get the size and position of the 2 bubbles
        const bubbleRect1 = bubble1.getBoundingClientRect();
        const bubbleRect2 = bubble2.getBoundingClientRect();
        const bubbleWidth1 = bubbleRect1.width + 10;
        const bubbleWidth2 = bubbleRect2.width + 10;

        console.log(`bubbleWidth1 = ${bubbleWidth1}`);

        // Highlight the bubbles being compared
        bubble1.style.backgroundColor = "red";
        bubble2.style.backgroundColor = "red";

        // Add a short delay to ensure the colors change immediately
        await delay(1000);

        console.log(`${i}. Comparing ${arr[i]} and ${arr[i + 1]} swapCount → ${swapCount} index → ${i}`);

        if (arr[i] > arr[i + 1]) {
          // Swap in the array
          statusHeader.innerHTML = 'Swap';
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          // Change colors to indicate a swap is happening
          bubble1.style.backgroundColor = "green";
          bubble2.style.backgroundColor = "green";

          // Animate moving right or left
          bubble1.style.transform = `translateY(-3vh)`; // Move up
          bubble2.style.transform = `translateY(3vh)`; // Move down

          await delay(1500); // Wait for move animation to complete

          // Animate bouncing up or down
          bubble1.style.transform = `translate(${bubbleWidth1}px, -3vh)`; // Move right
          bubble2.style.transform = `translate(-${bubbleWidth2}px, 3vh)`; // Move left
          await delay(500); // Wait for bounce animation to complete

          // Settle the bubbles back into position
          bubble1.style.transform = `translate(${bubbleWidth1}px, 0vh)`;
          bubble2.style.transform = `translate(-${bubbleWidth2}px, 0vh)`;

          await delay(500); // Wait for settle animation to complete

          // Reset transform styles
          bubble1.style.removeProperty('transform');
          bubble2.style.removeProperty('transform');

          // Removes old nodes
          bubbles.forEach(node => {
            const parentContainer = document.querySelector(".bubble-sort");
            parentContainer.removeChild(node);
          });
          
          // Insert new nodes (updated order)
          arr.forEach(value => {
            addBubbleElement(value);
          });

          swapCount++;

          // Indicate that sorting is not complete
          notComplete = true;
        } else {
          statusHeader.innerHTML = 'OK';
          await delay(300);
        }

        // Reset colors after comparison
        bubble1.style.backgroundColor = "lightblue";
        bubble2.style.backgroundColor = "lightblue";

        // Add a short delay to ensure the reset is visible
        await delay(300);
      } 
    }

    console.log(`Sorting completed with ${swapCount} swaps.`);
    statusHeader.innerHTML = 'DONE!';
    return arr;
  };





  //const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // = O(n) runtime
  //bubbleSort(arrTwo);
  //bubbleSort(arrTwo);
});