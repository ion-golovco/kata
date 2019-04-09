function tripleX(str) {
    if (str.match("x") == "x") {
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] === "x") {
                if (str[i] == str[i + 1] && str[i] == str[i + 2]) {
                    return true
                } else {
                    return false
                }
            }
        }
    } else {
        return false
    }
}
console.log(tripleX("abraa"))
