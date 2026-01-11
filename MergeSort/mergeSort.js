export const mergeSort = {
  delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)), 
  /**
   * Delays execution for a given number of milliseconds
   * @param {number} ms 
   * @returns {Promise<void>}
   */

  divide: (array) => {
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return { left, right };
  },
  /**
   * Splitting the Arrat into two equal halves
   * @param {number[]} array 
   * @returns {left: number[], right: number[]}
   */

  addMergeElement: (container, value) => {
    const element = document.createElement("div");
    element.classList.add("element-merge", `element-value-${value}`);
    element.textContent = value;
    container.appendChild(element);
  },
  /**
   * Adds an element to the DOM
   * @param {HTMLElement} container
   * @param {number} value
   * @returns {nothing}
   */
  
  addDivElement: (container, classList) => {
    const divElement = document.createElement("div");
    classList.forEach(element => {
      divElement.classList.add(element);
    });
    return container.appendChild(divElement);
  },
    /**
   * Adds a parent element to the DOM
   * @param {HTMLElement} container
   * @param {string[]} classList
   * @returns {HTMLElement} divElement
   */

  createBranch: (dividedArr, container) => {
    console.log("Opretter Child og left and right containers");
    const leftContainer = mergeSort.addDivElement(container, ["element-split-subparent-left"]);
    const rightContainer = mergeSort.addDivElement(container, ["element-split-subparent-right"]);

    if (dividedArr.left.length !== 0) {
      dividedArr.left.forEach(value => {
        mergeSort.addMergeElement(leftContainer, value);
      });
    }
    if (dividedArr.right.length !== 0) {
      
      dividedArr.right.forEach(value => {
        mergeSort.addMergeElement(rightContainer, value);
      });
    }

    return {leftContainer, rightContainer};
  },
  /**
   * Creates a branch in the DOM for the divided array
   * @param {left: number[], right: number[]} dividedArr 
   * @param {HTMLElement} container
   */
}
