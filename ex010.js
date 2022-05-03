/*
  ? 10) Implemente um método que encontre os valores comuns entre dois arrays Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
*/

function findSameValuesFromArrays(arr1, arr2) {
  let newArray = [];

  arr1.forEach((el) => {
    if (arr2.includes(el) && !newArray.includes(el)) newArray.push(el);
  });

  return newArray;
}

console.log(findSameValuesFromArrays([6, 8,], [8, 9]));
