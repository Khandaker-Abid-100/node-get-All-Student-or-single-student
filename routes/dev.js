import express from "express"
import {getAllDeveloper} from "../controller/devcontroller.js"
 const router = express.Router()

 router.get("/dev",getAllDeveloper)

 export default router