const express=require("express");
const cors=require("cors");
const Multer=require("multer");

const app = express();

app.use(cors());
app.use(express.json());
app.post("/upload",(req,res,next)=>{
    
})

app.get("/",(req,res,next)=>{
    res.send("Hello, world!");
})
app.listen(5000,()=>console.log('listening on port 5000'));