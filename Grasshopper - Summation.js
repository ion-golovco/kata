function summation(num){
  let acc = 0
  for(i=0;i<=num;i+=1){
    acc += i 
  }
  return acc
}
console.log(summation(4))