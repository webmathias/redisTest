const redis = require('redis')
const client2 = redis.createClient(6379,'redis')
let cont = 0
const send = ()=>{
    console.log('enviando')
    client2.rpush('#channel1', "Hi Redis: "+cont++);
    client2.rpush('#channel1', "Hi Redis: "+cont++);
    client2.rpush('#channel1', "Hi Redis: "+cont++);
    
}
setInterval(send,2000);
process.on('SIGTERM', ()=>{
    console.log('terminando');
    process.exit(0)
})
