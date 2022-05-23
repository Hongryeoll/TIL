// 별 찍기
// 방법1_재현님 코드
const level = 5;

for (let i = 1; i <= level; i++){
    let tree = "";
    for (let k = 1; k<=level-i; k++) {
        tree = tree + " "
    }
    for (let j = 1; j <= i*2 -1 ; j++){
        tree = tree + "*"
    }
    console.log(tree)
}

// 방법2_제로초님 코드
const level = 5;

for (let i = 1; i <= level; i++) {
  console.log(" ".repeat(level - i) + "*".repeat(i * 2 - 1));
}

// 출력값

//    *
//   ***
//  *****
// *******
//*********
