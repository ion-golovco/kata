function capitalize(s) {
    let arr = s.split("")
    let resultE = []
    let resultU = []
    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            resultE += arr[i].toUpperCase()
            resultU += arr[i]
        } else {
            resultE += arr[i]
            resultU += arr[i].toUpperCase()
        }
    }
    return [resultE, resultU];
};
console.log(capitalize("abcdef"))