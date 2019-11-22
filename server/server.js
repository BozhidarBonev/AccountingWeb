const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req,res){
    res.send('Hello from server');
})

app.post('/enroll', function(req,res){
    const output=`
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Respond to</h3>
    <p>${req.body.email}</p>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: 'angserveretest@gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'angserveretest@gmail.com', // generated ethereal user
            pass: 'testemail' // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // send mail with defined transport object
    let mailOptions={
        from: '${req.body.email}', // sender address
        to: 'hasancho31@abv.bg', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('contact', {msg:'Email has been sent'});
    });
})

app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
});