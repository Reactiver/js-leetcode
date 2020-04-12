const strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }

  // Algorithm KMP (prefixFunction)
  const string = needle + '#' + haystack;
  const prefixArray = [0];

  for (let i = 1; i < string.length; i++) {
    let j = prefixArray[i - 1];
    while (j > 0 && string[i] !== string[j]) {
      j = prefixArray[j - 1];
    }

    if (string[i] === string[j]) {
      j++;
    }
    if (j > 0 && needle.length === j) {
      return i - 2 * needle.length;
    }
    prefixArray[i] = j;
  }

  return -1;
};

console.log(strStr('mississippi', 'issip'));
