import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';

import limiter from './middleware/rateLimiter.js';
import logger from './middleware/logger.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(limiter);
app.use(logger);
dotenv.config();

app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('welcome to gateway!');
}
);

app.listen(PORT, () => {
  console.log(`Gateway Server is running on port ${PORT}`);
});