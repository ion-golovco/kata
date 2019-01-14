function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
function prediction(angleATron, leafNo) {
    let zero = 0
    let arr = []
    let result = { "leaf 1": zero.toFixed(1) + ' degrees' }
    for (let i = 0; i < leafNo; i = i + 1) {
        arr.push(i * angleATron)
        if (arr[i]>360) {
            result['leaf '+[i+1]] = round(arr[i]%360, 1).toFixed(1) + " degrees"
        }else{
            result['leaf '+[i+1]] = round(arr[i],1).toFixed(1) + " degrees"
        }
    }
    return result
}
console.log(prediction(137.5, 5))
