function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    let res = []
    for(let i=0;i<birds.length;){
        if(geese.includes(birds[i])){
            birds.splice(i,1)
            i--
        }
        i++
        }
    return birds
}
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))