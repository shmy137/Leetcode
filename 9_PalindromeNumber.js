var isPalindrome = function (x) {
  let og = x;
  let reverse = 0;

  while (x > 0) {
    let digit = x % 10;
    reverse = reverse * 10 + digit;
    x = Math.floor(x / 10);
  }

  if( reverse === og){
    return true
  }else{
    return false
  }
};
console.log(isPalindrome(121))