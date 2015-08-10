/**
 * Created by weizhankui on 2015/6/13.
 */
var client = require('./redis_client');
//一次存放多个值
/*client.mset('test key 1', 'test val 1', 'test key 2', 'test val 2', function (err, res) {
 console.log(err);
 console.log(res);
 });
 //获取值
 client.get('test key 1', function (err, data) {
 console.log(err);
 console.log(data);
 });
 //获取值
 client.get('test key 2', function (err, data) {
 console.log(err);
 console.log(data);
 });
 client.send_command('LRANGE', ['que', 0, 0], function (err, data) {
 console.log(err);
 console.log(data);
 });*/

var obj = new Object();
obj.name = 'weizhankui';

console.log(JSON.stringify(obj));

client.send_command('rpush', ['que', JSON.stringify(obj)], function (err, res) {
    console.log(err);
    console.log(res);
});

client.send_command('LINDEX', ['que', 18], function (err, res) {
    console.log(err);
    console.log(res);
    console.log(JSON.parse(res).name);
});

client.send_command('LLEN',[ 'que'], function (err, res) {
    console.log(err);
    console.log(res);
});


