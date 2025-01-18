import React, { useState, useEffect } from 'react';
import './App.css';
import { addTodoApi, fetchTodos } from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadTodos = async() => {
        setLoading(true);
        const todosData = await fetchTodos();
        setTodos(todosData);
        setLoading(false);
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const addTodo = async(newTodo) => {
        if (!newTodo.title.trim()) {
            alert('Title cannot be empty!');
            return;
        }
        await addTodoApi(newTodo);
        loadTodos();
    };

    return ( <
        div className = "App" >
        <
        h1 > Todo App < /h1> <
        TodoForm addTodo = { addTodo }
        /> {
            loading ? < div className = "loading-spinner" / > : < TodoList todos = { todos }
            />} <
            /div>
        );
    }

    export default App;