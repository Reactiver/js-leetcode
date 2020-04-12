const arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};

arr = [6214, -2290, 2833, -7908];
console.log(arrayPairSum(arr));
