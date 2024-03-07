const express = require("express")
console.log('Before requiring mongo module');
const collection = require("./mongo")
console.log('After requiring mongo module');
const cors = require("cors")
const nodemailer = require("nodemailer");


// const { name } = require("nodeman/lib/mustache")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


const transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com", // Replace with your SMTP service provider
    port: 2525, // Replace with the appropriate port
    secure: false, // Set to true if using a secure connection
    auth: {
      user: "bobychs66@gmail.com", // Replace with your SMTP username
      pass: "7AD7A0852F131487B80D60954B42314619EC", // Replace with your SMTP password
    },
  });



app.get("/",cors(),(req,res)=>{
    res.send("Welcome to the home route");

})




app.post("/Login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await collection.findOne({ email, password });
  
      if (user) {
        sendLoginConfirmationEmail(email, user.name);
        // Both email and password match
        res.json({status:"exist", userName: user.name});
      } else {
        // No matching record found
        res.json("notexist");
      }
    } catch (e) {
      // Error occurred
      res.json("fail");
    }
  });



  app.post("/Register", async (req, res) => {
    const { name, email, password } = req.body;
    console.log("Received registration request:", { name, email, password });

    const data = {
        name: name,
        email: email,
        password: password,
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json({ status: "exist" });
        } else {
          
            res.json({ status: "notexist", userName: data.name });
            await collection.insertMany([data]);
            sendRegistrationEmail(email, name);
        }
    } catch (e) {
        console.error("Error in MongoDB request:", e);
        res.json("fail");
    }
});

// Function to send a registration email
const sendRegistrationEmail = async (toEmail, userName) => {
    const mailOptions = {
      from: "bobychs66@gmail.com", // Replace with your email
      to: toEmail,
      subject: "Welcome to Our Website",
      text: `Hello ${userName},\n\nThank you for registering on our website. Welcome aboard!`,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Registration email sent successfully to ${toEmail}`);
    } catch (error) {
      console.error("Error sending registration email:", error.message);
    }
  };
  
  // Function to send a login confirmation email
  const sendLoginConfirmationEmail = async (toEmail, userName) => {
    const mailOptions = {
      from: "bobychs66@gmail.com", // Replace with your email
      to: toEmail,
      subject: "Login Confirmation",
      text: `Hello ${userName},\n\nYou have successfully logged in. Thank you for using our website!`,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Login confirmation email sent successfully to ${toEmail}`);
    } catch (error) {
      console.error("Error sending login confirmation email:", error.message);
    }
  };



app.listen(3000,()=>{
    console.log("port connected");
})