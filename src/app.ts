import express from 'express';
import connectDB from './config/db';
import studentRoutes from './routes/productRoutes';
import path from 'path';
import env from 'dotenv';

env.config()

const app = express()

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('favicon.ico',express.static(path.join(__dirname,'views','favicon.ico')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use((req,res,next)=>{
//     res.set('Cache-Control','no-store');
//     next()
// });

connectDB()

app.use('/',studentRoutes);

export default app;