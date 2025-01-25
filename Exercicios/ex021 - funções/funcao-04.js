function fatorial (n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat = fat * c // 5, 20, 60, 120
    }
}
console.log(fatorial(5))