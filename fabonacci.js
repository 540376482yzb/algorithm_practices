
// Fabonacci sequence

/*
    After the first two, each number is the sum of previous 2 numbers
    exmaple babonacci sequence: 1 1 2 3 5 8 13 ...

*/


const fab = (n) => {
    if (n === 0 || n === 1) return 1
    return fab(n - 1) + fab(n - 2)
}


const printFab = (n) => {
    const result = []
    while (n >= 0) {
        result.unshift(fab(n))
        n -= 1
    }
    return result
}

module.exports = { fab, printFab }