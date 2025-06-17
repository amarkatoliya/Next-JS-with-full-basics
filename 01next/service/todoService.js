import axios from 'axios';

const API_URL= 'api/todos';

const todoService = {
    getAllTodos: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching todos:", error);
            throw new Error("Failed to fetch todos");
            
        }
    },
    getTodoById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching todo:", error);
            throw new Error("Failed to fetch todo");
        }
    },
    createTodo: async (title) => {
        try {
            const response = await axios.post(API_URL, { title });
            return response.data;
        } catch (error) {
            console.error("Error creating todo:", error);
            throw new Error("Failed to create todo");
        }
    },
    updateTodo: async (id, updatedData) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, updatedData);
            return response.data;
        } catch (error) {
            console.error("Error updating todo:", error);
            throw new Error("Failed to update todo");
        }
    },
    deleteTodo: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting todo:", error);
            throw new Error("Failed to delete todo");
        }
    },
};

export default todoService;