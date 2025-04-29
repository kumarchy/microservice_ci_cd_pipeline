import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use('/api/service', userRouter);

app.get('/', (req, res) => {
  res.send('Hello welcome to auth service!');
}
);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);

