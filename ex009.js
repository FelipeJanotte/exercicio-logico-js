/*
  ? Implemente um método divida um array por uma quantidade passada por parâmetro. Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
*/

function particionizeArray(arr, partitionSize) {
  let newArray = [];

  for (let i = 0; i < arr.length; i+= partitionSize) {
    newArray.push(arr.slice(i, partitionSize + i));
  }

  return newArray;
}

console.log(particionizeArray([1, 2, 3, 4, 5], 2));
