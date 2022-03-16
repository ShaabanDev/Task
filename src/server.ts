import express, { Request, Response } from 'express';
import connectDB from './config/database';
import dotenv from 'dotenv';
import Dummy from './models/dummy'
import bodyParser from 'body-parser';
import {DummyIn} from './utils/dum'

dotenv.config();


connectDB();
const PORT  = 3000 || process.env.PORT
const app: express.Application = express();
app.use(bodyParser.json());



app.post('/', async (req: Request, res: Response)=>{
    const requestTime = new Date();
    res.json({message:"Success"})
    const body:DummyIn = req.body ;
    body.date = requestTime 
    await Dummy.create(body)
})



app.listen(process.env.PORT, function () {
    console.log(`starting app on: ${PORT}`);
});