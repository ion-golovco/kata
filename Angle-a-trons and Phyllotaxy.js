function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
function prediction(angleATron, leafNo) {
    let zero = 0
    let acumulator = 0
    let arr = []
    let result = { "leaf 1": zero.toFixed(1) + ' degrees' }
    let grade = []
    for (let i = 0; i < leafNo; i = i + 1) {
        arr.push(i * angleATron)
        if (arr[i] > 360) {
            let tsz = Math.floor(arr[i] / 360)
            let acc = 360 * tsz
            grade.push(arr[i] - acc)
        }
    } for (let i = 0; i <= arr.length; i = i + 1) {

        if (arr[i] < 360) {
            result["leaf " + [i + 1]] = round(arr[i],1).toFixed(1) + " degrees"
        } else if (arr[i] > 360) {
            result["leaf " + [i + 1]] = round(grade[acumulator],1).toFixed(1) + ' degrees' 
            acumulator += 1
        }
    }
    return result
}
console.log(prediction(137.5, 5))
