import express from 'express'
import userController from '../controllers/userController.js'
import upload from '../multer/imgConfig.js';
import User from '../models/userModel.js';


const router = express.Router()


router.post("/register", upload.single('img'), userController)

// router.get("/register",userController)

export default router;



// router.get
// router.post
// router.delete
// router.put