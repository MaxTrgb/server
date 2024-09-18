import express from 'express';
import postRouter from './routes/PostRouter.mjs';
import feedbackRouter from './routes/FeedbackRouter.mjs';
import dbConnection from './db/index.mjs';
import userRouter from './routes/UserRouter.mjs';


dbConnection.on('error', ()=>console.log('MongoDB connection error'));
dbConnection.on('connected',()=> console.log('MongoDB connection successful'));

const app = express();
const port = 4000;

app.use(express.json());

app.use('/api/posts', postRouter);
app.use('/api/feedback',feedbackRouter);
app.use(userRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

