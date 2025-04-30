import "dotenv/config";
import express from 'express';
import cors from 'cors';
import productRouter from './routes/productRoutes.js';
import { connectDB } from "./db/db.config.js";

const app = express();

const PORT = process.env.PORT || 3002; 

app.use (express.json());
app.use(cors());

connectDB();

app.use("/api/service", productRouter);;

app.get('/', (req, res) => {
    res.send('HELLO WELCOME EVERYONE TO product service');
}
);  

app.listen(PORT, () => {        
    console.log(`Server is running on port ${PORT}`);
}
);



