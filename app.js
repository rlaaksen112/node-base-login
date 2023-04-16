"use strict"
const express = require('express'); /* 라이브러리 사용하겠다 */
const app = express();
app.set('views','./views');  /* 뷰 폴더지정 */
app.set('view engine','ejs');   /* 뷰엔진을 ejs를 사용한다고 지정 (html을 어떤 엔진으로 해석할지 지정)*/

const home = require('./routes/home');  /* 라우팅 */
app.use('/',home);   /* use = 미들웨어 등록해주는 메서드 */

module.exports = app;
