const reverseString = function(stringArray) {
  for (let i = 0; i < Math.floor(stringArray.length / 2); i++) {
    const temp = stringArray[i];
    stringArray[i] = stringArray[stringArray.length - 1 - i];
    stringArray[stringArray.length - 1 - i] = temp;
  }
};

strArr = ['a', 'b', 'c', 'd'];
reverseString(strArr);
console.log(strArr);
