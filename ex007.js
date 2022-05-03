/*
  ? 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano. Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
*/

function isArraysEquals(arr1, arr2) {
  let counter = 0;

  if (arr1.length > arr2.length) {
    counter = arr1.length;
  } else counter = arr2.length;

  for (let i = 0; i < counter; i++) {
    if (arr1[i] != arr2[i]) return false;
  }

  return true;
}

console.log(isArraysEquals([1, 2, 3, 4], [1, 2, 3, 4]));
