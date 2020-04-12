// beats 98% javascript submissions O(n) time; O(1) space
const rotate = function(nums, k) {
  k = k % nums.length;

  const len = nums.length;
  for (let i = 0; i < len / 2; i++) {
    const temp = nums[i];
    nums[i] = nums[len - 1 - i];
    nums[len - 1 - i] = temp;
  }

  const firstTimes = k;
  const lastTimes = len - k;

  for (let i = 0; i < firstTimes / 2; i++) {
    const temp = nums[i];
    nums[i] = nums[firstTimes - 1 - i];
    nums[firstTimes - 1 - i] = temp;
  }

  for (let i = 0; i < lastTimes / 2; i++) {
    const temp = nums[i + firstTimes];
    nums[i + firstTimes] = nums[len - 1 - i];
    nums[len - 1 - i] = temp;
  }
};

nums = [1, 2, 3, 4, 5, 6];
rotate(nums, 10);
console.log(nums);
