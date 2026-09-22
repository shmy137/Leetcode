var isPalindrome = function(s) {   
let newS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let rev=newS.split("").reverse().join("")
if(rev == newS){
    return true
}else{
    return false
}
};