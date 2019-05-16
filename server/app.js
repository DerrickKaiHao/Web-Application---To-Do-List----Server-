var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var catCTRL = require('./api/category/category.controller');
var taskCTRL = require('./api/task/task.controller');
var mailCTRL = require('./api/mail/mail.controller');
const nodemailer = require('nodemailer');
var MailListener = require("mail-listener2");
var MailArr = [];
var returnMail = [];
var app = express();
var cors = require('cors');
const data = require('./configDB');
var session = require('express-session')
const PUBLIC_FOLDER = path.join(__dirname, "../public");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(PUBLIC_FOLDER));

app.get("/api/category", catCTRL.list);
app.post("/api/category", catCTRL.create);
app.get("/api/task", taskCTRL.list);
app.post("/api/task", taskCTRL.create);

app.put("/api/task/:task_id", taskCTRL.update);

app.get("/api/task/:task_id", taskCTRL.list);
app.delete("/api/task/:task_id", taskCTRL.destroy);

// Mail 
app.get("/api/mail", mailCTRL.list);
app.put("/api/mail/:mail_id", mailCTRL.update)
app.post("/api/mail", mailCTRL.create);
app.delete("/api/mail/:mail_id", mailCTRL.destroy)


// Login
app.post("/api/login",(req,res)=>{
    var username = req.body.info.username;
    var password = req.body.info.password;
    // console.log(data.mysql.username);
    if(username === data.mysql.username && password === data.mysql.password){
      console.log("welcome");
      var result = "true";
      res.status(200)
      .type("application/json")
      .json(result);

    }else{
      console.log("Invalid");
      var result = "false";
      res.status(200)
      .type("application/json")
      .json(result);
    }
    
})


// Send Mail
app.post('/send', (req,res)=>{
    
    const output = `
        ${req.body.msg}

    `


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: '', // generated ethereal user //Enter Gmail
          pass: '' // generated ethereal password //Enter password
        },
        tls:{
            rejectUnauthorized: false 
        }
      });
    
      // setup email data with unicode symbols
      let mailOptions = {
        from: '""<>', // sender address
        to: req.body.sender, // list of receivers
        subject: req.body.subject, // Subject line
        text: "Hello world?", // plain text body
        html: output// html body
      };

     transporter.sendMail(mailOptions, (error,info)=>{
        if(error){
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
     })
    
      
    
})



app.listen('3000',function(){
    console.log("server running at http://localhost:3000");
})
