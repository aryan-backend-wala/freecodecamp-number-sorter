const sortBtn = document.getElementById('sort');

const sortInputArray = (e) => {
  e.preventDefault();
  const inputValues = [...document.getElementsByClassName('values-dropdown')]
    .map(dropdown => dropdown.value);
  
  const sortedArray = inputValues.sort((a, b) => a - b);
  // const sortedArray= insertionSort(inputValues);
  updateHTML(sortedArray);
}

const updateHTML = (array) => {
  array.forEach((number, i) => {
    document.getElementById(`output-value-${i}`).innerText = number;
  });
};

const bubbleSort = (arr) => {
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
      if(arr[j] > arr[j+1]){
        // swap
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

const selectionSort = (arr) => {
  for(let i=0;i<arr.length - 1;i++){
    let minIndex = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[minIndex] > arr[j]){
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]; // swap
  }
  return arr;
}

const insertionSort = (arr) => {
  for(let i=1;i<arr.length;i++){
    const currValue = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > currValue){
      arr[j + 1] = arr[j]
      j--;
    }
    arr[j + 1] = currValue;
  }
  return arr;
}

sortBtn.addEventListener("click", sortInputArray);