import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import router from './routes/api.js';
import cookieParser from 'cookie-parser';

const allowedOrigins = [
  "http://localhost:5173", // your local frontend
  "https://to-dora-dailylife-task-management.vercel.app" // your deployed frontend
];

const app = express();

// MIDDLEWARES
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow server-to-server or Postman
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // ✅ important for cookies
}));
// app.use(cors());


// ROUTES ENTRY
app.get("/", (req, res) => res.send("Server is Working fine"));
app.use('/api/v1', router)



export default app;