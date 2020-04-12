// beats 92% javascript submissions
const getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  const arr = new Array((rowIndex + 1) * 2).fill(null);
  const middleIndex = rowIndex + 1;

  arr[0] = 1;
  arr[1] = 1;
  arr[middleIndex] = 1;
  let i = 1;

  for (let tries = 0; tries < Math.floor(rowIndex / 2); tries++) {
    i = 1;
    while (i < middleIndex && arr[i] !== null) {
      arr[middleIndex + i] = arr[i - 1] + arr[i];

      i++;
    }
    arr[middleIndex + i] = 1;
    i = middleIndex + 1;

    while (i < arr.length - 1 && arr[i] !== null) {
      arr[i - middleIndex] = arr[i - 1] + arr[i];
      i++;
    }
    arr[i - middleIndex] = 1;
  }

  return rowIndex % 2 === 0
    ? arr.slice(middleIndex)
    : arr.slice(0, middleIndex);
};

console.log(getRow(4));
