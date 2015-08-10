var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host:'smtp.qiye.163.com',
	port:25,
	auth: {
        user: 'jcfwpt@gei.com.cn',
        pass: 'gei!@#456'
    }
});
console.log(transporter);

transporter.sendMail({
    from: 'jcfwpt@gei.com.cn',
    to: 'weizhankui@gei.com.cn;362702750@qq.com',
    subject: '测试',
    text: '你好测试'
});