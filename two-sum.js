const twoSum = function(numbers, target) {
  let index2 = numbers.length - 1;

  for (let index1 = 0; index1 < numbers.length - 1; index1++) {
    while (index2 > 0 && numbers[index1] + numbers[index2] > target) {
      index2--;
    }
    if (numbers[index1] + numbers[index2] === target) {
      return [index1 + 1, index2 + 1];
    }
  }
};
