// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require ("dotenv"); // 어떤 os에서 개발하더라도 동일하게 환경변수를 등록하고 가져올 수 있음 
dotenv.config();
const cors = require('cors');

const app = express();
// const db =require('./src/config/db')


// 라우팅
const home = require("./src/routes/home"); // 만든 자바스크립트 파일을 require해서 부르는것 / 폴더를 상대적으로 명시 

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.send("로그인 되었습니다.");
});

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드


module.exports = app;
