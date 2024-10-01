import { useState, useEffect } from 'react';
import { PlusCircle, Trash2, CheckCircle, AlertCircle } from 'lucide-react';

const BASE_URI = import.meta.env.MODE === "development" ? 'http://localhost:3000/api' : '/api';

const TodoManager = () => {
  const [todos, setTodos] = useState([]);  // Initialize todos as an empty array
  const [newTodo, setNewTodo] = useState('');

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch all todos from the API
  const fetchTodos = async () => {
    try {
      const response = await fetch(`${BASE_URI}/todos`);
      if (!response.ok) throw new Error('Failed to fetch todos');
      
      const data = await response.json();
      setTodos(data || []);  // Use an empty array if data is null
    } catch (error) {
      console.error('Error fetching todos:', error);
      setTodos([]);  // Set an empty array in case of error
    }
  };

  // Add a new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return; // Prevent adding empty todo
    try {
      const response = await fetch(`${BASE_URI}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: newTodo, completed: false }),
      });
      if (!response.ok) throw new Error('Failed to add todo');
      const data = await response.json();
      setTodos([...todos, data]);
      setNewTodo(''); // Clear input after adding
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Toggle todo completion status
  const toggleTodo = async (id) => {
    try {
      const todo = todos.find(t => t.id === id);
      const updatedStatus = !todo.completed;

      const response = await fetch(`${BASE_URI}/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: updatedStatus }),
      });
      if (!response.ok) throw new Error('Failed to update todo');

      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: updatedStatus } : todo
      ));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${BASE_URI}/todos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete todo');
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 w-2/6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900 tracking-tight">
        Todo Manager
      </h1>

      {/* Form to add a new todo */}
      <form onSubmit={addTodo} className="mb-10">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-grow p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out text-gray-700 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-lg transition-all duration-150 ease-in-out"
          >
            <PlusCircle size={24} />
          </button>
        </div>
      </form>

      {/* Display todos */}
      {todos.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <AlertCircle className="mx-auto mb-4 text-gray-400" size={30} />
          <p className="font-medium">
          Task list is empty. Add a new task above!</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
                <span
                  className={`flex-grow text-lg overflow-hidden break-words font-semibold ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.body}
                </span>
              <div className="flex space-x-3">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`p-2 rounded-full transition-colors ${
                    todo.completed
                      ? "text-green-600 hover:text-green-700"
                      : "text-yellow-500 hover:text-yellow-600"
                  }`}
                >
                  <CheckCircle size={22} />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-2 text-red-500 hover:text-red-600 rounded-full transition-colors"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoManager;
