function diamond(n) {
  if(n<3||n%2==0){
    return null
  }
  let stea = "*"
  let res = []
  let sp = n/2
  let space = " "
  //Making one half of the star
  for (let j = 1, i = 0; i <= n; i++) {
    let current = stea.repeat(j)
    if (i % 2 !== 0) {
      j = j + 2
      res.push(current)
    }
  }
  let rRes = []

  //Reverse loop for res
  for (i = res.length - 2; i >= 0; i--) {
    rRes.push(res[i])
  }
  //Conncationating the two arrays
  res = res.concat(rRes)
  
  let result = space.repeat(sp) + res[0] 
  //Breaking lines for star look
  let j = 0

  //first half of the diamond
  for (i=1;i<res.length/2;i++){
    sp-=1
    result+= "\n"+space.repeat(sp)+res[i]
    j = i
  }
  //second half
    for (i=j+1;i<res.length;i++){
    sp+=1
    result+= "\n"+space.repeat(sp)+res[i]
  }
  return result + "\n"
}
console.log(diamond(31))

