const redis = require('redis')
// const client = redis.createClient(6379, 'localhost')
const client = redis.createClient(6379, 'redis')
// client.on('message', (channel, message) => {
//     console.log("recieved: ", message)
// })
console.log('Client started')
// client.subscribe('#channel1')
process.on('SIGTERM', () => {
    console.log('terminando');
    process.exit(0)
})
const pop = () => {
    client.blpop('#channel1', 0, (err, data) => {
        console.log("DATA: ", JSON.stringify(data))
        setTimeout(pop, data?0:1000);
    })
}
pop()



