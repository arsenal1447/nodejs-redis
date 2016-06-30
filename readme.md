study url:[http://www.cnblogs.com/zhongweiv/p/node_redis.html#node_intro](http://www.cnblogs.com/zhongweiv/p/node_redis.html#node_intro)


**cd noderedis 项目 执行**

 	npm install redis
	or
	npm install hiredis redis　　
	我这里采用 npm install hiredis redis 安装

　　*注：两种都可用，区别在于性能，hiredis是非阻塞的，而且速度更快；如果安装了hiredis，node_redis则会默认以它为解析器，没安装就会用纯javascript解释器，对于学习或者开发环境，用哪个都无所谓*


## 运行环境 

>windows:需要安装windows的redis客户端


运行项目 
	
	node test.js
	or
	supervisor test.js


设置密码的几种方式 
	
	第一种
	// 连接远程redis
	var redis = require('redis'),
	    PDS_PORT = 6379,        //端口号
	    PDS_HOST = '127.0.0.1', //服务器IP
	    RDS_PWD = 'zxx123456', //服务器IP
	    PDS_OPTS = {auth_pass:RDS_PWD},          //设置项
	    client = redis.createClient(PDS_PORT,PDS_HOST,PDS_OPTS);
	
	第二种
	client.auth('zxx123456');//填写密码
	
	第三种
	client.auth(RDS_PWD,function(){
	    console.log('通过认证');
	});


## 显示数据

![](https://github.com/zxx1988328/nodejs-redis/blob/master/img/redis_result.png)


	client.on('ready',function(err){
	    client.hmset('short',{'js':'javascript','C#':'c Sharp'},redis.print);
	    client.hmset('short','SQL','Structured Query Language','HTML','HyperText Mark-up Laguage',redis.print);
	
	    client.hgetall('short',function(err,res){
	        if(err){
	            console.log('Error:' + err);
	            return ;
	        }
	        console.dir(res);
	    });
	    console.log('connect');
	});

![](https://github.com/zxx1988328/nodejs-redis/blob/master/img/redis_result1.png)
