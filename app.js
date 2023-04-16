"use strict"
//모듈
const express = require('express'); /* 라이브러리 사용하겠다 */
const app = express();
const bodyParser = require("body-parser");  /* 데이터 들어오는 바디 파라미터 */

//라우팅
const home = require('./src/routes/home');  /* 라우팅 */

//앱 세팅
app.set('views','./src/views');  /* 뷰 폴더지정 */
app.set('view engine','ejs');   /* 뷰엔진을 ejs를 사용한다고 지정 (html을 어떤 엔진으로 해석할지 지정)*/
app.use(express.static(`${__dirname}/src/public`)); /* 자바스크립트 사용을 위한 정적 경로 지정 */
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',home);   /* use = 미들웨어 등록해주는 메서드 */

module.exports = app;

