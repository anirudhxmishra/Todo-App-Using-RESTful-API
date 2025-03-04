//impprt the model
const Todo= require("../models/todo");

//define route handler
exports.createTodo = async(req, res)=> {
    try{
        // extract title & description from request body
        const{title, description}= req.body;

        //create a new Todo Object & Insert in DB
        const response = await Todo.create({title,description});

        // send a JSON Response with a success Flag
        res.status(200).json({
            success:true,
            data:response,
            messege:'Entry Created Successfully'
         }
        ); 
    }
    catch(e){
        console.error(e);
        console.log(e);
        res.status(500)
        .json({
            success:false,
            data:'Internal server error',
            messege:e.messege,
        })
    }
}