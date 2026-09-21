var firstUniqChar = function (s) {
    for (i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            // console.log(i);
            return i
            break;
        }

    }
    return -1
};
console.log(firstUniqChar("loveleetcode"));