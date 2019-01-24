function positiveSum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}