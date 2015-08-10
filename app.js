/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
var i18n = require('i18n');

i18n.configure({
    locales: ['en', 'de', 'zh_CN'],
    cookie: 'locale_name',
    directory: __dirname + '/locales',
    defaultLocale: 'zh_CN',
});

app.configure(function () {
    app.use(express.cookieParser());
    // default: using 'accept-language' header to guess language settings
    app.use(i18n.init);
});


// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.session({
    secret: 'a',
    cookie: {path: '/', httpOnly: true, maxAge: 1000 * 60 * 120}
}));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', function (req, res) {
    res.render('layo');
});

app.post('/test',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.render('test');
});

var data = '';

app.post('/save',function(req,res){
	data = req.body.data2;
	res.send('success');
});

app.get('/test2', function (req, res) {

    res.render('test2',{
		data:data
	});
});


// Handle 404
app.use(function (req, res) {
    res.send('404: Page not Found', 404);
});

// Handle 500
app.use(function (error, req, res, next) {
    res.send('500: Internal Server Error', 500);
    console.log(error);
});


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
