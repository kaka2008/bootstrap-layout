/**
 * Created by weizhankui on 2015/6/13.
 */

var redis = require('redis'), client = redis.createClient(6379, '192.168.10.14', null);

client.on('error', function (err) {
    console.log(err);
});

module.exports = client;


