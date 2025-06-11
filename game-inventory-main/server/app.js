import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
// import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/userRoutes.js';
import adminRouter from './routes/adminRoutes.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.REACT_APP_URL, // Your frontend URL
  methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.set('views', path.join(process.cwd(), 'views'));
// app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json()); 

// app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/admin',adminRouter);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);