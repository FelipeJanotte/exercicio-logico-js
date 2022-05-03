/*
 ? 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
 ? Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
*/

function removeUnnecessaryItems(arr) {
  let newArray = arr.filter(
    (el) => el != false && el != undefined && el != "" && el != 0 && el != null
  );

  return newArray;
}

console.log(
  removeUnnecessaryItems([1, 2, "", undefined])
);
