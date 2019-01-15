function capitalize(s) {
    let arr = s.split("")
    let even = []
    let uneven = []
    for (i = 0; i < arr.length; i = i + 2) {
        even.push(arr[i])
        uneven.push(arr[i + 1])
    } let result = []
    let result1 = []
    let cEven = even.join().toUpperCase().split(",")
    let cUneven = uneven.join().toUpperCase().split(",")
    for (i = 0; i < cEven.length; i++) {
        result.push(cEven[i] + uneven[i])
        result1.push(even[i] + cUneven[i])
    }

    return [result.join(""), result1.join("")]
}
console.log(capitalize("abcdef"))


