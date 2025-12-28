import express from "express"
import devroute from "./routes/dev.js"
import stu from "./routes/student.js"


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(devroute)
app.use(stu)
app.listen(5050,()=>{
    console.log(`server is running on`);
})
