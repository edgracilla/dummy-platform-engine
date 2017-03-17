let redis = require("redis")
let cache = redis.createClient()

cache.hset("key1", "device1", '{"sequenceId":1234,"commandId":"9D7F015A","command":"ACTIIVATE","device":"567827489028375"}', () => {
	console.log('a')	
})

cache.hset("key1", "device2", '{"sequenceId":9383,"commandId":"B2A002EF","command":"ACTIIVATE","device":"567827489028376"}', () => {
	console.log('b')	
})
