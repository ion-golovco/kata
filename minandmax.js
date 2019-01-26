function highAndLow(numbers){
    numbers=numbers.split(" ")
    let res = [Math.max(...numbers),Math.min(...numbers)]
    return res.join(" ")
}
