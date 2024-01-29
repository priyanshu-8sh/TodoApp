const mongoose=require("mongoose");

url="mongodb+srv://priyanshu8sh:8soNVix1iswbrjJn@cluster0.flo0pig.mongodb.net/todos";
mongoose.connect(url);

const todoSchema=mongoose.Schema({
    title:String,
    description: String,
    completed:Boolean
})

const todo=mongoose.model("todo",todoSchema);

module.exports={
    todo:todo
};