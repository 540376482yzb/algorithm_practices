

// find greatest common denominator

/*
    greatestcommon denominator using Euclidean algorithm is achived by 
    1. breaking down larger number  = small number * n + r
    2. recursively pass in (smallNumber, r) until one of them reaches zero then the other one is gcd

    example 24 and 60
    60 = 24 * 2 + 12
    24 = 12 * 2 + 0 ------ 12 is the gcd
*/

function euclideanAlgorithm(a, b) {
    a = Math.abs(a)
    b = Math.abs(b)

    if (a === 0 && b === 0) return null
    if (a === 0 && b !== 0) return b
    if (b === 0 && a !== 0) return a

    if (a > b) {
        return euclideanAlgorithm(a % b, b)
    }
    return euclideanAlgorithm(b % a, a)
}

// test case:
console.log(euclideanAlgorithm(0, 0) === null)
console.log(euclideanAlgorithm(2, 0) === 2)
console.log(euclideanAlgorithm(5, 13) === 1)
console.log(euclideanAlgorithm(24, 60) === 12)