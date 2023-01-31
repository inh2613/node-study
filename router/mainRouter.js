const express=require('express')
const router=express.Router()


router.get("/",function(req,res){ //GET방식
    // //res.send('Hello World'); //사용자의 요청: req에 들어있고 응답을 보내줄때는 res
    // let query=req.query.page
    // console.log(query)
    // res.send({"Key":"Value"});

    res.render('index',{title:"EJS 메인페이지"}) //응답으로 그림파일을 전해줄 때 , 데이터 (title)까지 밖으로 내보낼 수 있다
})
router.get("/about",function(req,res){ // 하위 홈페이지(?)
    res.send('About Page');
})

router.post("/postapi",function(req,res){
    
    let body=req.body
    console.log(body)
    res.send("POST API")
    
})
module.exports=router // router 내보내기



