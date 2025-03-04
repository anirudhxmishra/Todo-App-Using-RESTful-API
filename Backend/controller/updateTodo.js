// Import the model
const Todo = require("../models/todo");

// Define route handler
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            id,  // Pass ID directly
            { title, description, updatedAt: Date.now() },
            { new: true }  // Ensures updated document is returned
        );

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
            message: "Updated Successfully!",
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: e.message,  // Fixed typo
        });
    }
};
