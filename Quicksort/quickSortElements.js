const elements = {
  // Function to add elements to the DOM
  addElementTree: async (arr) => {
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
    },
  
  // Delay function
  delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
}

export {elements};