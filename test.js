var redis = require('redis'),
    client = redis.createClient();


client.auth('zxx123456');//填写密码

client.on('ready',function(err){
    console.log('ready');
});