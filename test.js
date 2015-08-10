var request = require('request');
var sanitize = require('validator').sanitize;


var params = {
    "fields": {
        "taskId": "18c2b48cb1b94790ad6f8e6373e364b3",
        "taskName": "手机手机手机的图"
    }
};

//request.get('http://192.168.1.10:8058/rest/api/2/issue/createmeta?projectKeys=FEISHI',function(error,response,body){
//console.log(response.body);
//});
/*
 for (var i = 0; i <= 31; i++) {
 var s = '';
 if (i < 10) {
 s = '0' + i;
 } else {
 s = i;
 }
 request.del('http://192.168.0.25:9200/.marvel-2015.07.' + s, function (error, response, body) {
 if (error) {
 console.log(error);
 }
 console.log(body);
 });
 }*/

/*request.post("http://192.168.10.13/weibo//api/v1/s2/mobile/task/editTask?apikey=jinpai&userToken=620dab56debd48c0a16be03e3eb137c2", {form: params}, function (error, response, body) {
 if (error) {
 console.log(error);
 } else if (body.errorCode != null || body.errorCode != undefined) {
 console.log(body.errorCode);
 } else {
 console.log(response);
 //console.log(body);
 console.log('111111111111');
 }
 });*/



/*var validator = require('validator');
 validator.init();

 console.log(validator.escape("1>&/"));

 console.log(validator.isURL("http://www.baidu.com"));
 console.log(validator.isURL("https://www.baidu.com"));
 console.log(validator.isURL("www.baidu.com"));
 console.log(validator.isURL("baidu.com"));
 -*/

/*var moment = require('moment');

 console.log(moment().format("YYYY-MM-DD"));



 var validator = require('validator');
 var a = '\'测试\'';

 console.log(sanitize(a).trim());
 console.log(sanitize(a).xss());*/


/*request.get('http://localhost:8080/openapi/v1/doc/10?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew&userId=1',function(error,response,body){
 console.log(body);
 var s = JSON.parse(body);
 console.log(s.errorCode);
 });*/


/*request.get('http://localhost:8080/api/v1/doc/notice/1?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',function(error,response,body){
 //console.log(body);
 var s = JSON.parse(body);
 console.log(s.docs.length);
 });*/

/*request.post('http://localhost:8080/openapi/v1/user/eipcookie?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',{form:{cookieValue:11111111}},function(error,response,body){
 console.log(body);
 });*/

/*request.post(
 'https://qyapi.weixin.qq.com/cgi-bin/department/create?access_token=xV_nCEC9SoQLy-rqCcEhdBZrFMAE3giXWEkWax4_NEWkbuUkBSU8e5bK6p1leDSC',
 {
 name:'所领导',
 parentId:'1',
 order:'0',
 access_token:'xV_nCEC9SoQLy-rqCcEhdBZrFMAE3giXWEkWax4_NEWkbuUkBSU8e5bK6p1leDSC'
 },
 function(error,response,body){
 console.log(body);
 }
 );*/

/*var options = {
 url : 'https://qyapi.weixin.qq.com/cgi-bin/department/create?access_token=xV_nCEC9SoQLy-rqCcEhdBZrFMAE3giXWEkWax4_NEWkbuUkBSU8e5bK6p1leDSC',
 json:{
 name:'产业咨询部',
 parentid:'1',
 order:'3',
 access_token:'xV_nCEC9SoQLy-rqCcEhdBZrFMAE3giXWEkWax4_NEWkbuUkBSU8e5bK6p1leDSC'
 },
 headers:{'content-type':'application/json'},
 method:'POST'
 }

 request(options,function(error,response,body){
 console.log(body);
 });*/


/*request.post(
 'http://localhost:8080/msg/send',
 {form:{
 appId:'2',
 content: '微信收到消息\n感觉如何？',
 touser: '479'
 }},
 function(error,response,body){
 console.log(error);
 console.log(body);
 });*/
//发送消息
/*request.post(
 'http://localhost:8080/msg/send',
 {form:{
 appId:'2',
 content: "领导，测试一下，发送一条消息。\n<a href='http://www.gei.com.cn'>点击这里</a>",
 touser: '372|479',
 safe:'1'
 }},
 function(error,response,body){
 console.log(error);
 console.log(body);
 });*/

//添加部门  43
/*request.post(
 'http://localhost:8080/contact/org/add',
 {form:{
 name:'测试',
 indexNumber: 50
 }},
 function(error,response,body){
 console.log(error);
 console.log(body);
 });*/

/*request.post(
 'http://localhost:8080/contact/org/update',
 {form:{
 deptId:43,
 name:'测试123'
 }},
 function(error,response,body){
 console.log(error);
 console.log(body);
 });*/



/*request.get('http://localhost:8080/openapi/v1/borrow/isborrowed?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew&docId=89757&userId=120105198402091226'
 ,function(error,response,body){
 console.log(body);
 });*/

/*request.get('http://localhost:8080/openapi/v1/borrow/list?userId=420281198410012500&type=reserve&apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',function(error,response,body){
 console.log(body);
 });*/

/*request.post('http://localhost:8080/openapi/v1/doc/weiboArchiveDoc?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',
 {form:{
 userId:'420281198410012500',
 docId:'c9719817c23525dc1b4a5475d777e8ca',
 targetFolderId:'f384'
 }},function(error,response,body){
 console.log(body);
 });*/

/*request.post('http://localhost:8080/openapi/v1/borrow/add?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',{form:{
 userId:'420281198410012500',
 privileges:'read,download',
 docId:'83708',
 finishTime:'2014-12-28 12:00:00'
 }},function(error,response,body){
 console.log(body);
 });*/



/*request.post('http://localhost:8080/openapi/v1/privilege/user?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',
 {form:{
 username:'admin',
 docId:'2776ad55d0a854f5fdbadc6626433e8a',
 owners:'',
 readers:'zxli',
 downloaders:''
 }},function(error,response,body){
 console.log(error);
 console.log(body);
 });*/


/*request.post('http://localhost:8080/openapi/v1/privilege/cancel/user?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',
 {form:{
 docId:'83708',
 userIds:'420281198410012500',
 priviledges:'owner',
 username:'admin'
 }},function(error,response,body){
 console.log(error);
 console.log(body);
 });*/

//request.get('http://192.168.30.13:8088/jinjiu/openapi/v1/privilege/check/doc_read?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew&nodeId=81d87103230bfb9f6523404a740784c7&userId=42240319771006001x');


/*request.post('http://localhost:8080/api/v1/msg/send?apikey=cc482158e456430da4a29fcf108f86df',
 {form:{
 appId:'2',
 content:'你还好吗',
 touser:'479'
 }},function(error,response,body){
 console.log(error);
 console.log(body);
 });*/


/*request.post('http://localhost:8080/openapi/v1/doc/b49989715f8beb6b394105c3d14abf8a/delete?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',
 {form:{
 userId:'1'
 }},function(error,response,body){
 console.log(error);
 console.log(body);
 });*/

/*var options = {
 method:'post',
 url:'http://192.168.7.123:9200/ink/kb_feed/_search',
 body:{
 "query":
 {"filtered":
 {"filter":
 {"and":
 [
 {"query": {"match_phrase": {"onlyComment": 0}}},
 {"query": {"match_phrase": {"isDelete": 0}}},
 {"query": {"match_phrase": {"visualLevel": 7}}}
 ]
 }
 }
 },
 "from":0,
 "size":50,
 "sort":{
 "pushTime":{
 "order":"desc"
 }
 }

 },
 json:true
 };*/


/*var options = {
 method:'post',
 url:'http://192.168.10.13:8088/jinjiu/openapi/v1/privilege/cancel/user?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',
 form:{
 userIds:'2',
 docId:'10021',
 priviledges:'read,owner',
 username:'admin'
 }
 };

 var callback = function(error,response,body){
 console.log(body);
 };

 request(options,callback);*/

//传递json
/*var options = {
 url : 'http://192.168.30.88:8080/openapi/v1/privilege/setdoc/10021?apikey=rFFf04GiJFCy1m9FcHmGlXPr3rlIbgew',
 json: [
 {docId:'10021',
 userId:'20',
 reader:'y',
 downloader:'n',
 manager:'y'
 },
 {docId:'10021',
 userId:'30',
 reader:'n',
 downloader:'n',
 manager:'y'
 },
 {docId:'10021',
 userId:'40',
 reader:'y',
 downloader:'y',
 manager:'y'
 }
 ]
 ,
 headers:{'content-type':'application/json'},
 method:'POST'
 }

 request(options,function(error,response,body){
 console.log(body);
 });*/


/*function read(from, size) {
    var options = {
        url: 'http://191.168.1.65:9200/krp_jinpai/krp_document/_search?_source',
        json: {
            "query": {
                "match_all": {}
            },
            "from": from,
            "size": size
        },
        headers: {'content-type': 'application/json'},
        method: 'POST'
    };


    request(options, function (error, response, body) {
        var json = JSON.stringify(body);
        var size = body.hits.hits.length;


        for (var i = 0; i < size; i++) {
            var id = body.hits.hits[i]._id;
            var obj = body.hits.hits[i]._source;

            delete obj['esDoc.archiveStatus'];
            delete obj['archive.archiveYear'];
            delete obj['archive.archivePeriod'];

            write(id, obj);
        }

    });
}

function write(id, obj) {
    var options = {
        url: 'http://191.168.1.65:9200/krp_jinpai_v2/krp_document_v2/' + id,
        json: obj,
        headers: {'content-type': 'application/json'},
        method: 'PUT'
    };

    request(options, function (error, response, body) {
        console.log(body);
    });


}

//从一个里往另一个里导入数据
function init() {
    for (var i = 900; i < 1200; i++) {
        //read((i*100+1),100);

        read((i * 100 + 1), 20);
        read((i * 100 + 21), 20);
        read((i * 100 + 41), 20);
        read((i * 100 + 61), 20);
        read((i * 100 + 81), 20);

    }
}

//read(30001, 500);
//init();

function noAttachContent(from, size) {
    var options = {
        url: 'http://191.168.1.65:9200/krp_jinpai/krp_document/_search?_source',
        json: {
            "query": {
                "match_all": {}
            },
            "from": from,
            "size": size
        },
        headers: {'content-type': 'application/json'},
        method: 'POST'
    };

    request(options, function (error, response, body) {
        var json = JSON.stringify(body);
        var size = body.hits.hits.length;


        for (var i = 0; i < size; i++) {
            var id = body.hits.hits[i]._id;
            var obj = body.hits.hits[i]._source;

            printNoContent(id,obj['esAtt']);
        }

    });

}

function printNoContent(id,atts){
    if(atts && atts.length>0){
        var a = false;
        for(var i=0;i<atts.length;i++){
            var obj = atts[i];
            if(obj.attContent=="" && (obj.attExtName =='doc' || obj.attExtName =='docx' || obj.attExtName =='xls' || obj.attExtName =='xlsx')){
                a = true;
                break;
            }
        }
        if(a){
            console.log(id);
        }
    }
}

function getNoAttachDocuments(){

    for(var i=0;i<1500;i++){
        noAttachContent(i*100+1,100);
    }

}

//getNoAttachDocuments();

function test2(){
	var options = {
        url: 'http://192.168.10.10:9200/krp_jinpai/krp_document/792fd913c299b1ec8d7026a1ebb87a94/_update',
        json: {
            
		  "doc": {
			"archive": {
			  "archiveYear": 2015,
			  "archivePeriod": 10
			},
			"esDoc": {
			  "archiveStatus": "HAVADOC"
			}
  
		  }
        },
        headers: {'content-type': 'application/json'},
        method: 'POST'
    };

    request(options, function (error, response, body) {
		console.log(body);



    });
}

test2();*/


var options = {
	 method:'post',
	 url:'http://192.168.30.88/weibo/dept_user_suggest',
	 form:{
		content:'刘丹',
		count:10
	 }
 };

var callback = function(error,response,body){
	console.log(body);
};

//request(options,callback);