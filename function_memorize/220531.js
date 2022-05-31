// 원하는 매개변수만 받기

//배열을 선언합니다.
let numbers = [273, 52, 103, 32, 57]

// 배열의 모든 값을 제곱합니다.
numbers = numbers.map(function(value){
    return value * value
})


//출력 합니다.
numbers.forEach(console.log)