let checking = (array) => {
  for (let i = 0; i < array.length; i++) {
    let prvi = array[i];
    let drugi = array[i + 1];
    if (prvi > drugi) {
      bubbleSort(array);
    }
  }
};

let bubbleSort = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    let prviIndex = niz[i];
    let drugiIndex = niz[i + 1];

    if (prviIndex > drugiIndex) {
      niz[i] = drugiIndex;
      niz[i + 1] = prviIndex;
      checking(niz);
    }
  }
};

//let array = [8, 2, 4, 1, 3];
let array = [20, 28, 4, 18, 2, 12, 50, 49];

checking(array);

console.log(array);
