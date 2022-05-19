// 가격 낮은순 구하기
// 가격 높은순 구하기
// product 할당부분은 복붙해놓고 시작~ 
// 가격

// Blossom Dress : 70000, 
// Check Shirt : 32000, 
// Black Tie : 15000, 
// Springfield Shirt : 67000, 
// Red Mini Dress : 82000

let products = [
    {id:0, price:70000, title: 'Bossom Dress'},
    {id:1, price:32000, title:'Check Shirt'},
    {id:2, price:15000, title: 'Black Tie'},
    {id:3, price:67000, title:'Springfield Shirt'},
    {id:4, price:82000, title: 'Red Mini Dress'},
  ];
  
  let lowToHigh = function () {
    products.sort(function(a,b) {
      return a.price - b.price;
    });
    console.log(products);
  };
  
  lowToHigh();