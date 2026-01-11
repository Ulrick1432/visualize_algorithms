// Splitting the Arrat into two equal halves
const divide = (array) => {
  console.log("divide Start");
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  console.log("divide retusults:", left, right);
  return { left, right };
}

// Merging two sorted arrays
const merge = (left, right) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Main Merge Sort function
const mergeSort = (array) => {
  console.log("Dividing:", array);
  if (array.length <= 1) {
    console.log("Input array is of length 1 or less, returning:", array);
    return array;
  }
  // Recursively divide and merge
  const { left, right } = divide(array);
  // Conquer (Recursively sort the two halves) and Merge the sorted halves
  return merge(mergeSort(left), mergeSort(right));
}


const inputArr = [3, 5, 2, 90, 4, 7];

console.log("Final result", mergeSort(inputArr));
//console.log("Console.log", mergeSort(inputArr));