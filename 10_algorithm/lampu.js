const lampu = (val) => {
    let bil = 0
    
    for (let x=1; x<=val; x++) {
        if (val % x == 0) {
            bil += 1
        }
    }
    
    return bil == 2 ? "lampu mati" : "lampu nyala"  
}

console.log(lampu(1))
console.log(lampu(2))
console.log(lampu(3))
console.log(lampu(4))