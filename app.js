const express=require('express');

const router=require('./src/routes/api');

const app=new express();


// Security middleware
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xssClean=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const path=require('path');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});



// Security middleware implementation
app.use(rateLimit({windowMs: 15 * 60 * 1000, max: 1000}));
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());
app.use(cors());
app.use(cookieParser());









// Body parser
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb', extended:true}));


// Database connection and manage 
const mongoose=require('mongoose');
const url='mongodb://localhost:27017/MERN-Stack-Full-Fledged-E-commerce-Website';
const option={user:"", pass:"", autoIndex:true};
mongoose.connect(url, option).then(()=>{
    console.log('MongoDB Connected');
}).catch((error)=>{
    console.log(error);
});



// etag
app.set('etag', false);


app.use("/api", router);


module.exports=app;