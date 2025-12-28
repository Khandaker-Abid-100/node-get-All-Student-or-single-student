import express from "express"
import {getStu,singleStudent} from "../controller/studentController.js"
const router = express.Router()
router.get("/stu/:roll",singleStudent)
router.get("/stu",getStu)

export default router 