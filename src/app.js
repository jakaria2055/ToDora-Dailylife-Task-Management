import 'dotenv/config';
import express from 'express';
import path from "path";
import cors from 'cors'; 
import router from './routes/api.js';
import cookieParser from 'cookie-parser';

const app = express();

// MIDDLEWARES
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// ROUTES ENTRY
app.use('/api/v1', router)


app.use(express.static(path.join('../ToDo-Client/dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(clientDistPath,'ToDo-Client','index.html','index.html'));
})



export default app;