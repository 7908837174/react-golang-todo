import React, { useState, useEffect } from 'react';
import { PlusCircle, Trash2, CheckCircle } from 'lucide-react';

const BASE_URI = import.meta.env.MODE==="development" ? 'http://localhost:3000/api' :"/api"

const TodoManager = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${BASE_URI}/todos`);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    try {
      const response = await fetch(`${BASE_URI}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: newTodo, completed: false }),
      });
      const data = await response.json();
      setTodos([...todos, data]);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id) => {
    try {
      await fetch(`${BASE_URI}/todos/${id}`, {
        method: 'PATCH',
      });
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${BASE_URI}/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 w-5/6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Todo Manager</h1>
      <form onSubmit={addTodo} className="mb-6">
        <div className="flex items-center">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <PlusCircle size={24} />
          </button>
        </div>
      </form>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-md"
          >
            <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.body}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`p-1 rounded-full ${
                  todo.completed ? 'text-green-500 hover:text-green-600' : 'text-gray-500 hover:text-gray-600'
                }`}
              >
                <CheckCircle size={20} />
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-1 text-red-500 hover:text-red-600 rounded-full"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoManager;