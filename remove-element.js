const removeElement = function(nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }

  nums.length = j;
  return j;
};

const arr = [1, 2, 3, 2, 4, 5];
console.log(removeElement(arr, 2));
console.log(arr);
