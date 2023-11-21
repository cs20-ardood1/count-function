// Project Title

function count(array, item) {
  let numItem = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      numItem++;
    }
  }
  return numItem;
}
