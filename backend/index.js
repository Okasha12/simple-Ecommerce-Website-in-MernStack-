import express from 'express'
import colors from 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnetion from './database/db.js'
import router from './routers/userRouter.js'



// database connection / function calling
dbConnetion()

// rest object
const app = express()

// dot env configuration
dotenv.config()

// cors - cross origin resource sharing
app.use(cors())

// converting data to json
app.use(express.json());

app.use("/api/v1/auth",router)


const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server is runnong on ${port} Port`.bgMagenta)
})



