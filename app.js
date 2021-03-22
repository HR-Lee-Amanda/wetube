import express from "express"; // const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter"; 
import globalRouter from "./routers/globalRouter"; 
import routes from "./routes";
/* default로 export 하지 않았으면 { userRouter } */

const app = express();

/* 위와 같은 코드 // 위의 코드를 arrow function 이라고 함
function handleProfile(req, res) {
    res.send("You are on my profile.");
}
*/

app.set('view engine', "pug");

/* 미들웨어들 추가 */
app.use(cookieParser());
app.use(express.urlencoded({extended:true})); // 서버가 form에서 받은 데이터를 이해할 수 있도록 
app.use(express.json()); // 서버가 json 형식의 데이터를 이해할 수 있도록
app.use(morgan("dev"));
app.use(helmet());

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // 누군가 /user 경로로 들어오면 (그 하위 경로를 위해) 이 router 전체를 사용하겠다는 의미
app.use(routes.videos, videoRouter);

export default app; // 누군가 내 파일을 불러올 때 app object를 주겠다.







