// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
  const group = {};

  strs.forEach((str) => {
    let sorted = str.split("").sort().join("");
    if (!group[sorted]) group[sorted] = [];
    group[sorted].push(str);
  });

  return Object.values(group);
};
