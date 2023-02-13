const express=require("express")
const app = express()
const mongoose=require("mongoose")
const UserModel = require("./models/Users")
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(
    "mongodb+srv://mgarun007:<password>@cluster0.9bz4cp6.mongodb.net/?retryWrites=true&w=majority"
)

app.get("/getUsers",(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

app.post("/createUsers",async (req,res)=>{
    const user=req.body;
    const newUser=new UserModel(user);
    await newUser.save()
})
app.listen(3001,()=>{
    console.log("server is running!!!")
})
