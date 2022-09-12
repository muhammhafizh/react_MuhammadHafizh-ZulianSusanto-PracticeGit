const prima = (val) => {
    let bil = 0
    
    for (let x=1; x<=val; x++) {
        if (val % x == 0) {
            bil += 1
        }
    }
    
    return bil == 2 ? "prima" : "bukan prima"  
}

console.log(prima(1))
console.log(prima(2))
console.log(prima(3))
console.log(prima(4))