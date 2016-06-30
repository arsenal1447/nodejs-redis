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






