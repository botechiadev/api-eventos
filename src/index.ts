import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import router from './router'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());
app.use(router);
app.use(express.json())
const port = Number(process.env.PORT)||3033
app.listen( port, ()=>{
    console.log(`running on ${port}`)
})

