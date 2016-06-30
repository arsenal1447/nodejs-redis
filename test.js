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

// client.on('ready',function(err){
//     client.set('author','zxx',redis.print);
//     client.get('author',redis.print);
//     console.log('connect');
// });


// client.on('ready',function(err){
//     client.hmset('short',{'js':'javascript','C#':'c Sharp'},redis.print);
//     client.hmset('short','SQL','Structured Query Language','HTML','HyperText Mark-up Laguage',redis.print);

//     client.hgetall('short',function(err,res){
//         if(err){
//             console.log('Error:' + err);
//             return ;
//         }
//         console.dir(res);
//     });
//     console.log('connect');
// });


client.on('ready',function(err){
    var key = 'skills';
    client.sadd(key,'C#','java',redis.print);
    client.sadd(key,'nodejs');
    client.sadd(key,'MySQL');

    client.multi()
    .sismember(key,'C#')
    .sismember(key)
    .exec(function(err,replies){
        console.log("MULTI got "+ replies.length + "replies");
        replies.forEach(function(reply, inedx){
            console.log("Reply " + index + ": " + reply.toString());
        });
        client.quit();
    });
});

client.on('ready',function(err){
    console.log('ready');
});