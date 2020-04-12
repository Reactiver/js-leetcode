const findMaxConsecutiveOnes = function(nums) {
  let maxOnes = 0;
  let currentOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      currentOnes = 0;
    } else {
      currentOnes++;
      if (currentOnes > maxOnes) {
        maxOnes = currentOnes;
      }
    }
  }

  return maxOnes;
};
