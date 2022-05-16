// 1번
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums);

// 2번
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);

// 3번

var arr = [100, 200, 300];
console.log(typeof(arr));
`Object`(배열은 타입이 객체이기에 오브젝트)

// 4번

다음 변수 a를 typeof(a)로 넣었을 때 에

1. 입력 : a = 1, 출력 : Number
2. 입력 : a = [1, 2, 3], 출력 : Object
3. 입력 : a = 'p', 출력 : String

정답 4번 입력 : a = 2.22, 출력 : Boolean -> Number

// 5번
```
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);
```

1)  10
2)  12
3)  14
4)  16

정답 4번
10+1
10+1 +3   +2(b) = 16



// 6번

다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

1)  NaN
2)  1
3)  ""(빈 문자열)
4)  0
5)  undefined

정답 : 2번 1 -> null, false


// 7번

다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

1)  age
2)  Age
3)  let
4)  _age
5)  1age

정답 : JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야하며 let 은 이미 JavaScript 문법에 존재하는 예약어라 사용이 불가능합니다.