const longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  const commonPrefix = [];
  let isLastIterate = false;

  for (let i = 0; i < strs[0].length && !isLastIterate; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[j - 1][i]) {
        return commonPrefix.join('');
      }
      if (strs[j].length === i) {
        isLastIterate = true;
      }
    }
    commonPrefix.push(strs[0][i]);
  }

  return commonPrefix.join('');
};

console.log(longestCommonPrefix(['fles', 'flfdsf', 'flpp']));
