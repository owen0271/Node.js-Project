/**
 * Created by owen0271 on 2016/12/7.
 */
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var data_input = {
    form_submission_status: false,
    pageData: {
        nav_list: [
            {nv_title: 'Home', page: '/'},
            {nv_title: 'Gallery', page: '/resume/gallery'},
            {nv_title: 'Contact', page: '/resume/contact'}
        ],
        contact: [
            'Wen Wen',
            '613-262-8830',
            'owen0271@gmail.com',
            'owen0271@hotmail.com',
            'Apartment 2113, 180 Lees Avenue, Ottawa, Ontario, Canada',
            'K1S 5J6'
        ]
    },
    title: 'Iris'
};
/* GET home page. */
router.get('/', function (req, res, next) {
    data_input.form_submission_status = false;
    res.render('contact',
        data_input
    );
});

router.post('/', function(req, res, next){
    console.log(req.body.your_name);

    var mailData = {
        from: "qq14180402@gmail.com",
        to: "owen0271@hotmail.com",
        subject: "mail from "+ req.body.your_name,
        text: "sending from: "+ req.body.your_email+'\n'+req.body.email_content
    };
    send_Email(mailData);
    data_input.form_submission_status = true;
    res.render('contact',
        data_input
    );
});

function send_Email(mail_data){
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport((smtpTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user:"qq14180402@gmail.com",
            pass:"5201314250"
        }
    })));

    // setup e-mail data with unicode symbols
    /*
    var mailOptions = {
        from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
        to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plaintext body
        html: '<b>Hello world ?</b>' // html body
    };
    */

    // send mail with defined transport object
    transporter.sendMail(mail_data, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}

module.exports = router;
