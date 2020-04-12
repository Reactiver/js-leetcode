const minSubarrayLen = function(s, nums) {
  if (nums.length === 0) {
    return 0;
  }

  let leftIndex = 0;
  let rightIndex = 0;
  let sum = nums[0];
  let minLength = Infinity;

  while (rightIndex < nums.length) {
    while (sum < s && rightIndex < nums.length - 1) {
      rightIndex++;
      sum += nums[rightIndex];
    }

    while (sum - nums[leftIndex] >= s) {
      sum -= nums[leftIndex];
      leftIndex++;
    }

    if (sum >= s && minLength > rightIndex - leftIndex + 1) {
      minLength = rightIndex - leftIndex + 1;
    }

    rightIndex++;
    sum += nums[rightIndex];
  }

  if (sum >= s && minLength > rightIndex - leftIndex + 1) {
    minLength = rightIndex - leftIndex + 1;
  }

  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubarrayLen(7, [1, 2, 6, 1, 3]));
console.log(minSubarrayLen(3, [1, 1]));
console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubarrayLen(15, [1, 2, 3, 4, 5]));
