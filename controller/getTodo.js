// Import the model
const Todo = require("../models/todo");

// Define route handler to get all todos
exports.getTodo = async (req, res) => {
    try {
        // Fetch all TODO items from DB
        const todos = await Todo.find({});

        // Response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Data is Fetched!"
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            data: e.message,
            message: "Server Error!"
        });
    }
};

// Define route handler to get a specific todo by ID
exports.getTodoById = async (req, res) => {
    try {
        // Fetch TODO item based on ID from DB
        const id = req.params.id;
        const todo = await Todo.findById(id);

        // Data for given ID not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found with Given ID!"
            });
        }

        // Data for given ID found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} Data Successfully Fetched!`
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            data: e.message,
            message: "Server Error!"
        });
    }
};
