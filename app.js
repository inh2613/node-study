const { urlencoded } = require('express');
const express = require('express');  //express라는 모듈을 require로 꺼내와서 express변수에 할당
const app=express(); //express의 모습은 함수였음
const helmet = require('helmet'); //보안 도구
const ejs=require('ejs')


app.set('view engine','ejs'); //그림파일을 보여줄때 어떤 view 도구를 사용할건지 명시 (ejs 템플릿를 사용), 단 확장자 ejs만 그림파일로 간주하겠다는 것
app.set('views','./views') // 내가만든 html파일은 views폴더안에있다.
app.use('/public',express.static(__dirname +'/public')) //CSS, 이미지 같은 static파일들이 어디에 있는지 명시(public 폴더), app.js 로부터 어디에 있는지 상대 주소로 표현

app.use(helmet()); // 미들웨어를 설정하는 express가 제공하는 함수

app.use(express.json()) // POST 방식의 데이터를 확인하기 위해 아래 두개는 무조건 필요
app.use(express.urlencoded())

const mainRouter=require('./router/mainRouter') //router변수가 mainRouter에 들어감

app.use('/class101',mainRouter)

app.listen(3000,function(req,res){//컴퓨터의 전원키 역할, 3000번 포트를 사용하겠다.
    console.log("서버가 실행되고 있다!");
}) 


