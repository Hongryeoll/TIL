<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <div id="root"></div>
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel">
	// 현재 시간을 출력하는 컴포넌트

function Clock(props) {
    return (
        <div>
            <h1>리액트로 시계 만들기</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    
}


	// 컴포넌트를 root에 렌더링
    setInterval(() => {
       ReactDOM.render (
           <React.StrictMode>
               <Clock />
           </React.StrictMode>
       document.getElementById("root")
       ); 
    }, 1000);



    </script>
  </body>
</html>


