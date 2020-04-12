const addBinary = function(a, b) {
  const reverseA = a
    .split('')
    .reverse()
    .map(str => Number(str));
  const reverseB = b
    .split('')
    .reverse()
    .map(str => Number(str));
  const result = [];
  let carry = 0;

  const maxLength = a.length > b.length ? a.length : b.length;

  for (let i = 0; i < maxLength; i++) {
    let sum = carry;
    if (i < reverseA.length) {
      sum += reverseA[i];
    }
    if (i < reverseB.length) {
      sum += reverseB[i];
    }

    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  }

  if (carry === 1) {
    result.push(1);
  }

  return result.reverse().join('');
};

console.log(addBinary('1111', '1111'));
