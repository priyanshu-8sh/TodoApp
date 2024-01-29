const express=require("express"); 
const cors=require("cors");
const {createTodo,updateTodo}=require("./types.js");
const {todo}=require("./db.js");

const app=express();
app.use(cors());
app.use(express.json());
const validatePost=(req,res,next)=>{
    const body =req.body;
    const result=createTodo.safeParse(body);
    if(result.success) next();
    else res.status(411).send("invalid Request"); 
    return;
}
const validatePut=(req,res,next)=>{
    const body =req.body;
    const result=updateTodo.safeParse(body);
    if(result.success) next();
    else res.status("411").send("You sent the wrong inputs "); 
    return;
}

//to get all the todos
app.get("/todos",async (req,res)=>{
    const result=await todo.find({});
    res.status(200).json({Result: result});

})
//to create a TODO
app.post("/todo",validatePost,async (req,res)=>{
    const body=req.body;
    await todo.create({
        title:body.title,
        description:body.description,
        completed:false
    })
    res.status(200).json({"message": "Todo created successfully"});
})
//to update the status of the TODO
app.put("/completed", validatePut,async (req,res)=>{
    const body =req.body;
    console.log(body);
    await todo.updateOne({
        _id:body.id
    },{completed:true});
    res.status(200).json({"message": "Todo completed "});  
})


const port=3001;
app.listen(port,()=>{
    console.log(`Server is runninng at port ${port}`);
});