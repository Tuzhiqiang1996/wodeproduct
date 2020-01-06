//功能：学子商城服务器程序
// npm start  启动服务器  json--
//1:下载四个第三方模块
//express           web服务器
//mysql             mysql驱动
//express-session   会话对象
//cors              跨域
//[8080脚手架   4000服务器]
//npm i express mysql express-session cors
//2:引入第三方模块
const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");
//3:创建数据库连接池
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   connectionLimit:15,
   database:"tt"
})
//4:创建web服务器
var server = express();
//5:配置跨域
//允许跨域程序端口
server.use(cors({
    //允许哪个程序列表 脚手架
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    //每次请求验证
    credentials:true
}));
//6:配置session对象
server.use(session({
   secret:"128位安全字符串",//加密条件
   resave:true,            //请求更新数据
   saveUninitialized:true  //保存初始化数据
}))
//7:指定静态目录  public
server.use(express.static("public")); 
//8:启动监听端口  4000
server.listen(4000);


//引入路由
let userRouter = require("./router/rout.js");






//功能一;完成用户登录验证
server.get("/login",(req,res)=>{
  //1:获取参数 uname upwd
  var n = req.query.uname;
  var p = req.query.upwd;
  //2:创建sql
  var sql =" SELECT id FROM Tz_login WHERE uname = ? AND upwd = md5(?)";
  //3:发送sql并且结果返回脚手架
  pool.query(sql,[n,p],(err,result)=>{
     //4:如果发生严重错误抛出
     if(err)throw err;
     //5:登录成功用户名密码有错
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"})
     }else{
       //6:登录成功
       //7:将登录成功用户id保存
       //session对象作为登录成功凭据
       //result=[{id:1}]
       //不写req.session.id error
       req.session.uid=result[0].id;
       res.send({code:1,msg:"登录成功"});
     }
  })
})
//测试   68~72   16:52
//1:启动服务器 node app.js
//2:启动mysql 3006
//3:http://127.0.0.1:4000/login?uname=tom&upwd=122
//3:http://127.0.0.1:4000/login?uname=tom&upwd=123


/*
//注册功能
server.post("/login",(req,res)=>{
var regg=req.body;
//查询是否存在
var sql="SELECT id FROM regg WHERE uname="${regg.uname}";
pool.query(sql,function (err,data){
			if(err){console.log(err)}else{
			if(data.length>0){
			let result={
			status:false,
				errMsg:"该用户已经注册"
			}
			res.send(result);
			}else{
			
			reggg(regg,res)
			}
			}
})
		pool.query(sql,function (err,data){
			
			
			}
})

*/


server.get("/reg",(req,res)=>{
var n = req.query.uname;
  var p = req.query.upwd;
  console.log(n,p)
        var sql="SELECT id FROM Tz_login WHERE uname=?";
        var sql1="INSERT INTO Tz_login(uname,upwd) values(?,md5(?))";
 pool.query(sql,[n],(err,result)=>{
        console.log(result)
    if(err)throw err;
     if(result.length==1){
     return res.send({code:-1,msg:"该用户已经存在"})
     }else{
      pool.query(sql1,[n,p],(err,result)=>{
        console.log(result);
		if(err)throw err;
                  if(result.affectedRows==1){
                  return res.send({code:1,msg:"注册成功"})
                  }else{
                    return res.send({code:-1,msg:"注册失败"})
                  }
                 })
      }
    })
})




