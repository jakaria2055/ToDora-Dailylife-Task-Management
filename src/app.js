import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import router from './routes/api.js';
import cookieParser from 'cookie-parser';

const app = express();

// MIDDLEWARES
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}));



// ROUTES ENTRY
app.get("/", (req, res) => res.send("Server is Working fine"));
app.use('/api/v1', router)



export default app;