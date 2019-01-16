function findShort(s) {
    let a = s.split(' ')
    a.sort((a, b) => a.length - b.length)
    return a[0].length
}