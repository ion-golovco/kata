function tankvol(h,d,vt) {
    let r = d/2
    let e1 = (r-h)/r
    let e2 = Math.sqrt(2*r*h-Math.pow(h,2))
    let e3 = (r-h)*e2
    let e4 = Math.pow(r,2)*Math.acos(e1)
    let e5 = e4 - e3
    //e5=e5.toFixed(1)
    let rSPi = (r*r)*Math.PI
    let heigth = vt/rSPi 
    return Math.floor(heigth*e5)
}
console.log(tankvol(2,80,400))
