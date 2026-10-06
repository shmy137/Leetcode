var detectCapitalUse = function (word) {
  const str = /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/;

  return str.test(word);
};
