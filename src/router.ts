import express, {Request, Response, Router} from 'express'

const router = express.Router()

router.get('/', (req:Request, res:Response)=>{
    res.status(200).json({message:'It works'})
})

export default router