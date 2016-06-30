// 本地连接
// var redis = require('redis'),
//     client = redis.createClient();

// 连接远程redis
var redis = require('redis'),
    PDS_PORT = 6379,        //端口号
    PDS_HOST = '127.0.0.1', //服务器IP
    RDS_PWD = 'zxx123456', //服务器IP
    PDS_OPTS = {auth_pass:RDS_PWD},          //设置项
    client = redis.createClient(PDS_PORT,PDS_HOST,PDS_OPTS);


// client.auth('zxx123456');//填写密码

client.auth(RDS_PWD,function(){
    console.log('通过认证');
});

client.on('ready',function(err){
    client.set('author','zxx',redis.print);
    client.get('author',redis.print);
    console.log('connect');
});


client.on('ready',function(err){
    console.log('ready');
});