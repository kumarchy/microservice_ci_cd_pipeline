import express from 'express';
import cors from 'cors';
import orderRouter from './routes/orderRoutes.js';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/service', orderRouter);

const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('welcome to order service!');
}
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);