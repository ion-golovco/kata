function points(games) {
    let acc = 0
    for (let i = 0; i < games.length; i++) {
        let arr = games[i]
        if (arr[2] < arr[0]) {
            acc = acc + 3
        } else if (arr[0] === arr[2]) {
            acc = acc + 1
        } else {
            acc += 0
        }
    }
    return acc
}



console.log(points(['0:0', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']))