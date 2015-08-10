/**
 * Created by weizhankui on 2015/6/13.
 */
var client = require('./redis_client');

function test() {
    var arr = new Array();

    console.log(1);

    for (var i = 0; i < 100; i++) {
        var obj = new Object();
        obj.index = i;
        arr[i] = obj;
        console.log(i);
        putToList(obj);
    }

    console.log(2);
}

function putToList(obj) {
    client.send_command('LLEN', ['queue'], function (err, res) {
        if (err) {
            console.log(err);
        } else {
            if (res < 10) {
                client.send_command('rpush', ['queue', JSON.stringify(obj)], function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(res);
                });
            }
        }
    });
}

test();



