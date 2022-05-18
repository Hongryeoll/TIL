// a부터 b까지 더하는 함수
// 1부터 100까지
// 1부터 500까지

function sumAll(a,b) {
    let outpput = 0
    for (let i = a; i <= b; i++) {
        outpput += i
        
    }
    return outpput
}
console.log(`1부터 100까지의 합: ${sumAll(1,100)}`);
console.log(`1부터 500까지의 합: ${sumAll(1,500)}`);

// a부터 b까지 곱하는 함수
// 1부터 10까지
// 1부터 50까지

function 곱하기All(a,b) {
    let result = 1
    for (let i = a; i <= b; i++) {
        result *= i
        
    }
    return result
}
console.log(`1부터 10까지의 곱: ${곱하기All(1,10)}`);
console.log(`1부터 50까지의 곱: ${곱하기All(1,50)}`);