/*
*************************************************************
***** What is Babel? ****************************************
 : 최신의 자바스크립트 코드를 예전의 자바스크립트 코드로 변환

 npm install @babel/node
 npm install @babel/preset-env

*************************************************************
*************************************************************


*************************************************************
***** 코드를 수정할 때마다 서버 재시작을 하지 않아도 되도록 *****
npm install nodemon -D
여기서 -D는 프로그램이 아니라 프로그래머가 필요한 패키지일 경우
"scripts": {
    "start": "nodemon --exec babel-node index.js --delay 2"
  }
내가 저장할 때마다 그것을 반영해서 서버 자동 재실행

*************************************************************
*************************************************************


*************************************************************
***** Middleware? *******************************************
유저와 마지막 응답 사이에 낀 것
라우팅 후, 콜백함수 사이에서 동작할 함수. 즉, 사이에 있는 함수.
express에서의 모든 함수는 middleware가 될 수 있음

const betweenHome = (res, req, next) => {
    console.log("Between");
    next();
};
app.get("/", betweenHome,handleHome);

이렇게 되어있으면 중간에 낀 betweenHome이 middleware, 
next()가 handleHome()을 실행시킬 수 있도록 퍼미션을 주는 것.
next() 필수. 없으면 handleHome() 실행 불가
middleware로 로그인 여부, 로그 작성 등을 할 수 있음.

하나의 라우트 말고 모든 라우트에 동일한 middleware 적용하고 싶으면
app.use(betweenHome);
app.use(); 의 순서가 굉장히 중요함. 접속이 있으면 위에서부터 아래로 
실행되기 때문에  app.get(); 바로 위에 두는 것이 중요함.
app.get(); 아래 두면 app.use(); 위에 있는 app.get(); 부분에는 적용 안됨

만약 middleware가 response를 보낸다면 연결을 끊을 수 있음. 가령,
const middleware = (req, res, next) => {
    res.send("not happening");
}

*************************************************************
*************************************************************


*************************************************************
***** morgan, helmet, body parder, cookie parser ************

middleware의 한 종류. 
npm install morgan
npm install helmet
npm install body-parser
npm install cookie-parser

morgan : logging 에 도움을 줌
helmet : 보안에 도움을 줌, 다른 사용법 없이 app.use(helmet());
body parser : form 을 받았을 때 그 데이터를 가지고 있는 
                request object 에 접근할 수 있길 원함
                body parser는 body로부터 정보룰 얻을 수 있게 해줌
                몇 가지 옵션을 정의해야 함. (json, text, urlencoded 등)
cookie parser : session 다루기 위해 cookie에 유저정보 저장

*************************************************************
*************************************************************


***** Router ************************************************
*************************************************************

route들의 복잡함을 쪼개주는데 사용할 수 있음
app.use("/user", userRouter); 
 : 누군가 /user 경로로 들어오면 (그 하위 경로를 위해) 이 router 전체를 사용하겠다는 의미

*************************************************************
*************************************************************


***** MVC Pattern *******************************************
*************************************************************

Model : data                                        (database)
View : how does the data look                       (template)
Control : the function that looks for the data      (function)

URL에 해당하는 Router를 사용하고 실행하는 함수가 Controller

app.use("/", globalRouter);
app.use("/user", userRouter); // 누군가 /user 경로로 들어오면 (그 하위 경로를 위해) 이 router 전체를 사용하겠다는 의미
app.use("/video", videoRouter);

이런 것들을 따로 빼서 하위 url 분리


*************************************************************
*************************************************************

*/