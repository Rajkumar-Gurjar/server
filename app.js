// 1. npm init                 // se package.json aayega
// 2. npm i express            // se package-lock.json aur node_modules folder aayega
// 3. npm i nodemon           // se server automatic stop start hota rahega
// 4. npm i mongoose          // se database (mongoDB) se connectivity hogi

// ye dono image upload krne ke liye use kr rhe h
// 5. npm i cloudinary        // ye online free cloud storage h jaha pr hmm project me use hone bale photo rakhenge with public id aur secure url
// 6. npm i express-fileupload    // se image file folder me upload hogi

// 7. npm i bcrypt        // se password encrypt ho kr database me store hoga       
// 8. npm i jsonwebtoken       // se jwt token ko use karenge 
// 9. npm i cookie-parser


const express = require('express')
require("dotenv").config();

const app = express()
const web = require('./routes/web')
const connectDB = require('./db/connectDB')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const cors = require("cors")


// ✅ Fix: remove trailing slash + allow methods + headers
app.use(
  cors({
    origin: "https://coursebooking257.netlify.app", // no trailing slash
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // allow cookies
  })
);

// token get cookie
app.use(cookieParser())

// connect db
connectDB()
app.use(express.json())

// image Upload
app.use(fileUpload({
    useTempFiles : true,
}));

app.use('/api',web)

// function when response 
// app.get('/', (req, res) => { 
//   res.send('Hello World!')
// })


// server start
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));