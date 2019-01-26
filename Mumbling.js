function accum(s) {
s=s.split("")
for(i=1;i<s.length;i++){
    s[i]=s[i]+ s[i].repeat(i).toLowerCase() 
    s[i] = s[i].charAt(0).toUpperCase() + s[i].substr(1)
}
return s.join("-")
}
console.log(accum("ZpglnRxqenU"))



//accum("abcd") -> "A-Bb-Ccc-Dddd"