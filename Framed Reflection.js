function mirror(text) {
    let space = text.split(" ")
    function longest_string(space) {
        var max = space[0].length;
        space.map(v => max = Math.max(max, v.length));
        result = space.filter(v => v.length == max);
        return result;
    }
    let mir = longest_string(space)
    let arr = text.split("")
    let st = ""
    let stsusjos = ""
    let arrI = []
    let space1 = ""
    for (i = text.length; i > -1; i -= 1) {
        arrI.push(arr[i])
    } let arrE = arrI.join('').split(' ')

    for (i = arrE.length -1 ; i >= 0; i -= 1) {
        let sp =  mir[0].length -arrE[i].length
        let spacer = " "
        arrE[i] =arrE[i] + spacer.repeat(sp)
        }

    let spaceResult = []
    if (text.match(" ")) {
        for (let i = 0; i < mir[0].length; i++) {
            st += "*"
            stsusjos = st + "****"
        }
    } else {
        for (let i = 0; i < text.length; i++) {

            st += "*"
            stsusjos = st + "****"
        }
    }
    if (text.match(" ") == " ") {
        for (i = space.length - 1; i >= 0; i -= 1) {
            spaceResult += "* " + arrE[i] + space1 + " *" + "\n"
        }
    } else {
        return stsusjos + "\n" + "* " + arrE[0] + " *" + "\n" + stsusjos
    }
    return stsusjos + "\n" + spaceResult + stsusjos
}
console.log(mirror('Hello lol asfgf fafgaga gfsg'))

// Ce animala de cod doamne