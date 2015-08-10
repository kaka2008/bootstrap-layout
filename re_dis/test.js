/**
 * Created by weizhankui on 2015/6/13.
 */
var obj = new Object();
obj.name = 'weizhankui';

var str = JSON.stringify(obj);
console.log(str);
console.log(JSON.parse(JSON.stringify(obj)).name);