// Import the model
const Todo = require("../models/todo");

// Define route handler
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the todo
        const todo = await Todo.findByIdAndDelete(id);

        // If no todo is found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found!",
            });
        }

        // Success response
        res.status(200).json({
            success: true,
            data: todo,
            message: "Deleted Successfully!",
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: e.message,
        });
    }
};
