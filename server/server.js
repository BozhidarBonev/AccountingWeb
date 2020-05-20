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
        host: 'mail.kpiconsultbg.com',
        
        auth: {
            user: 'ymdeindhoven@gmail.com',
            pass: 'Marconilaan_81',
        }
    });

    // send mail with defined transport object
    let mailOptions={
        from: '${req.body.email}', // sender address
        to: 'dimulskiatanas@gmail.com', // list of receivers
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