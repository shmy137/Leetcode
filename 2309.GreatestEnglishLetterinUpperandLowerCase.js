var greatestLetter = function (s) {

    for (i = 25; i >= 0; i--) {
        let upper = String.fromCharCode(65 + i)
        let lower = String.fromCharCode(97 + i)

        if (s.includes(upper) && s.includes(lower)) {
            return upper
        }
    }
    return ""
};