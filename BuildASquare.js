function generateShape(int) {
    let shape = "+"
    shape = shape.repeat(int)
    let res = shape
    for (i = 0; i < int - 1; i += 1) {
        res += '\n' + shape
    }
    return res
}
