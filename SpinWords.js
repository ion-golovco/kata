function spinWord(w) {
    let spinedWord = []
    for (let i = w.length - 1; i > -1; i -= 1) {
        spinedWord.push(w[i])
    }
    return spinedWord.join("")
}
function spinWords() {
    let str = arguments[0]
    str = str.split(" ")

    for (let i = 0; i < str.length; i += 1) {
        if (str[i].length >= 5) {
            str[i] = str[i].replace(str[i], spinWord(str[i]))
        }
    }
    return str.join(" ")
}
console.log(spinWords("fdhhaesaV is 8boon"))